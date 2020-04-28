import React from "react";
import { Box, Badge } from "@chakra-ui/core";

const CardBadge = ({badge}) => (

  <Box className="badges">
    <Badge marginRight="1" backgroundColor="blue.700" color="white">
      {badge}
    </Badge>
  </Box>
);

export default CardBadge;
