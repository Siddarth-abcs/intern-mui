import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function CheckboxSelection() {
  const [test,setTest] = React.useState("vddv")
  useEffect(()=>{
    console.log(test)
    setTest("text")
  })
  return (
    <div className='w-5/6 m-auto'>
          <Box sx={{ minHeight: 352, minWidth: 290 }}>
      <SimpleTreeView checkboxSelection>
        <TreeItem itemId="grid" label="customer_service">
          <TreeItem itemId="grid-community" label="support" />
          <TreeItem itemId="grid-pro" label="customer_success" />
        </TreeItem>
        <TreeItem itemId="pickers" label="design">
          <TreeItem itemId="pickers-community" label="graphic_design" />
          <TreeItem itemId="pickers-pro" label="product_design" />
          <TreeItem itemId="web_design" label="web_design" />
        </TreeItem>
      </SimpleTreeView>
    </Box>
    </div>
  );
}