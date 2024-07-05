import { Badge, Table } from "react-bootstrap";

export default function Resulttble(){
    return(
        <div>
            <Table responsive='sm'>
                <thead>
                    <th>SR NO.</th>
                    <th>NAME</th>
                    <th>MATH MARKS</th>
                    <th>PHY MARKS</th>
                    <th>CHEMISTRY MARKS</th>
                    <th>PASS/FAIL</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pritesh</td>
                        <td>95</td>
                        <td>85</td>
                        <td>45</td>
                        <td><Badge bg="success">Pass</Badge></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Chandrashekhar</td>
                        <td>90</td>
                        <td>80</td>
                        <td>40</td>
                        <td><Badge bg="success">Pass</Badge></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Vivek</td>
                        <td>23</td>
                        <td>45</td>
                        <td>55</td>
                        <td><Badge bg="danger">Fail</Badge></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Parshuram</td>
                        <td>93</td>
                        <td>88</td>
                        <td>48</td>
                        <td><Badge bg="success">Pass</Badge></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>OM</td>
                        <td>80</td>
                        <td>70</td>
                        <td>60</td>
                        <td><Badge bg="success">Pass</Badge></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Harsh</td>
                        <td>65</td>
                        <td>46</td>
                        <td>45</td>
                        <td><Badge bg="success">Pass</Badge></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}