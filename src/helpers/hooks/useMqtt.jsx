import { useEffect, useRef, useState, useCallback } from 'react';
import mqtt from 'mqtt';

export function useMqttClient({ brokerUrl }) {
  const clientRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);

  const connect = useCallback((userId) => {
    if (!userId || clientRef.current) return;

    const topic = `mdm/users/${userId}`;
    setCurrentTopic(topic);

    const client = mqtt.connect(brokerUrl, {
      username: 'admin',
      password: 'admin',
      clean: true,
      topic: topic,
      connectTimeout: 4000,
      reconnectPeriod: 1000
    });

    clientRef.current = client;

    client.on('connect', () => {
      console.log('✅ MQTT conectado');
      setIsConnected(true);
      client.subscribe(topic, (err) => {
        if (err) console.error('❌ Error al suscribirse:', err);
        else console.log('📡 Suscrito a', topic);
      });
    });

    client.on('message', (t, payload) => {
      if (t === topic) {
        const msg = payload.toString();
        setMessage(msg);
      }
    });

    client.on('error', (err) => {
      console.error('❌ MQTT error:', err);
    });

    client.on('close', () => {
      console.warn('⚠️ Conexión MQTT cerrada');
      setIsConnected(false);
    });
  }, [brokerUrl]);

  const disconnect = useCallback(() => {
    if (clientRef.current) {
      clientRef.current.end(true, () => {
        console.log('🔌 Desconectado manualmente');
        clientRef.current = null;
        setMessage(null);
        setIsConnected(false);
        setCurrentTopic(null);
      });
    }
  }, []);

  const publish = (msg) => {
    if (clientRef.current && isConnected && currentTopic) {
      clientRef.current.publish(currentTopic, msg);
    }
  };

  // Limpieza en desmontaje del componente
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return { message, isConnected, publish, connect, disconnect, setMessage };
}
