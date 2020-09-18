import React from 'react';
import axios from 'axios';

import './App.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Card, CardContent, Typography } from '@material-ui/core';

const server = 'http://localhost:5000/excel';

interface Props {}
interface State {
  status: boolean;
  file: any;
  result: [];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      status: false,
      file: null,
      result: [],
    }

    this.uploadFile = this.uploadFile.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.resetData = this.resetData.bind(this);
    this.memberList = this.memberList.bind(this);
  }

  uploadFile(e: any) {
    this.setState({
      file: e.target.files[0],
    }, () => {
      this.sendFile();
    });
  }

  sendFile() {
    const params = new FormData();
    params.append('file', this.state.file)
    axios.post(server, params)
    .then((res) => {
      console.log(res.data)
      this.setState({
        status: true,
        result: res.data,
      });
    })
    .catch((e) => {
      console.error(e);
      this.setState({
        status: false,
        result: e,
      });
    });
  }

  resetData() {
    this.setState({
      status: false,
      file: null,
      result: [],
    })
  }

  memberList(list: []) {
    const tableItem = list.map((filedata: any) => {
      const sheetItem = filedata.sheets.map((sheetdata: any) => {
        const cellItem = sheetdata.cells.map((celldata: any) => {
          return (
            <React.Fragment>
              <TableRow hover>
                <TableCell>{sheetdata.sheetname}</TableCell>
                <TableCell>{celldata.cell}</TableCell>
                <TableCell>{celldata.hit}</TableCell>
                <TableCell>{celldata.company}</TableCell>
                <TableCell>{celldata.text}</TableCell>
              </TableRow>
            </React.Fragment>
          );
        });
        return (
          <React.Fragment>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>SHEET</b></TableCell>
                    <TableCell><b>CELL</b></TableCell>
                    <TableCell><b>HIT WORD</b></TableCell>
                    <TableCell><b>COMPANY NAME</b></TableCell>
                    <TableCell><b>TEXT</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cellItem}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
          </React.Fragment>
        );
      });
      return (
        <React.Fragment>
          <Card>
            <CardContent>
              <Typography variant="h5">
                {filedata.filename}
              </Typography>
              <Typography>
                {sheetItem}              
              </Typography>                
            </CardContent>
          </Card>
        </React.Fragment>
      );
    });
    return (
      <Card>
        {tableItem}
      </Card>
    );
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <input
              accept=".xlsx"
              id="contained-button-file"
              //multiple
              type="file"
              //hidden
              onChange={this.uploadFile}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.resetData}
            >
              RESET
            </Button>
          </Toolbar>
        </AppBar>
        {this.memberList(this.state.result)}
      </div>
    );
  }
}

export default App;
