'use client';
import {
    SimpleTextareaField,
    SimpleNumberInputFieldComponent,
    SimpleSliderField,
    SimpleRadioGroupField,
    SimpleInputField,
} from '@components/forms/index';

import * as React from 'react';
import {
    MapComponent
} from '@components/maps/MapComponent';

import { Box } from '@chakra-ui/react'; // Componentes de Chakra UI



const MiFormulario = () => {
    return (
        <>
            <MapComponent position={[-12.007172935393886, -77.06031303157475]}/>
            <Box height="10" />
            {/* <SimpleInputField label="Correo" placeholder="Escribe tu correo xd" helperText="Nunca compartiremos tu correo" type="email" />
            <Box height="10" />
            <SimpleRadioGroupField label="Framework favorito" options={['React', 'Vue', 'Svelte']} onChange={(val) => console.log(val)} />
            <Box height="10" />
            <SimpleNumberInputFieldComponent label="Edad" defaultValue={25} min={18} max={99} />
            <Box height="10" />
            <SimpleSliderField label="Nivel de experiencia" />
            <Box height="10" />
            <SimpleTextareaField label="Comentarios" /> */}
        </>
    );
};


export default MiFormulario;
