import React from "react";
import "./TablesStyles.css";

function Tables() {
    return (
        
       
        <div className="row">

        <div className="column">
            <h1>Men World Ranking</h1>
            <table>
                <tr>
                    <th>RK</th>
                    <th>Team</th>
                    <th>Total Points</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Brazil</td>
                    <td>1841.30</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Belgium</td>
                    <td>1816.71</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Argentina</td>
                    <td>1773.88</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>France</td>
                    <td>1759.78</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>England</td>
                    <td>1728.47</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Italy</td>
                    <td>1726.14</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Spain</td>
                    <td>1715.22</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Netherlands</td>
                    <td>1694.51</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Portugal</td>
                    <td>1676.56</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Denmark</td>
                    <td>1666.57</td>
                </tr>
            </table>
        </div>

<div className="column">
<h1>Women World Ranking</h1>
<table>
    <tr>
        <th>RK</th>
        <th>Team</th>
        <th>Total Points</th>
    </tr>
    <tr>
        <td>1</td>
        <td>USA</td>
        <td>2087.48</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Sweden</td>
        <td>2066.30</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Germany</td>
        <td>2064.75</td>
    </tr>
    <tr>
        <td>4</td>
        <td>England</td>
        <td>1728.47</td>
    </tr>
    <tr>
        <td>5</td>
        <td>France</td>
        <td>2023.09</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Spain</td>
        <td>1997.74</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Canada</td>
        <td>1997.31</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Netherlands</td>
        <td>1994.69</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Brazil</td>
        <td>1989.98</td>
    </tr>
    <tr>
        <td>10</td>
        <td>Korea DPR</td>
        <td>1940.00</td>
    </tr>
</table>
</div>
</div>
    );
}

export default Tables;
