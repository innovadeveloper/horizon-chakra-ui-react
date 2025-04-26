import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react";

const SimpleMenu = ({ items, onSelect, textMenu}) => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const handleSelect = (policy) => {
    setSelectedPolicy(policy);
    if (onSelect) {
      onSelect(policy); // si quieres manejarlo desde fuera
    }
  };

  return <>
    <Menu>
      <MenuButton
        as={Button}
        px={4}
        py={2}
      >
        {textMenu}
      </MenuButton>
      <MenuList>
        {items.map((policy) => (
          <MenuItem
            key={policy.key}
            onClick={() => handleSelect(policy)}
          >
            {policy.value ?? "Sin nombre"}
          </MenuItem>
        ))}
        <MenuDivider />
        <MenuItem onClick={() => console.log(selectedPolicy)}>
          Ver Selección
        </MenuItem>
      </MenuList>
    </Menu>
  </>
};

export { SimpleMenu };
