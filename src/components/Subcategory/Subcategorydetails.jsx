import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Subcategoryedit from "./Subcategoryedit";
import "./subview.css";
import Topbar from "../Adminpanel/Topbar";
import Sidebar from "../Adminpanel/Sidebar";

const Subcategorydetails = () => {
  var [sub, setSub] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3005/views")
      .then((response) => {
        console.log(response.data);
        setSub(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const updateValues = (row) => {
    setSelected(row);
    setUpdate(true);
  };
  var result = (
    <div className="bb">
      <Topbar />
      <Sidebar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Subcategoryname</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sub.map((row, pos) => {
              return (
                <TableRow key={pos}>
                  <TableCell>{row.Sname}</TableCell>
                  <TableCell>{row.subc[0].Cname}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => updateValues(row)} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
  if (update) result = <Subcategoryedit data={selected} method="put" />;
  return result;
};

export default Subcategorydetails;
