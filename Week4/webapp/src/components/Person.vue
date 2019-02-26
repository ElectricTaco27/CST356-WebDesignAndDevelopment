<template>
    <div>
        <h1 class ="testClass">People Table</h1>
        <table>
            <tr>
                <th>First Name</th>
                <th>Middle Initial</th>
                <th>Last Name</th>
            </tr>
            <tr>
                <td>Asuna</td>
                <td>F</td>
                <td>Yuuki</td>
            </tr>
            <tr>
                <td>Kirito</td>
                <td>B</td>
                <td>Kazugaya</td>
            </tr>
            <tr>
                <td>Aiz</td>
                <td>D</td>
                <td>Wallenstein</td>
            </tr>
            <tr>
                <td>Shino</td>
                <td>S</td>
                <td>Asuda</td>
            </tr>
            <tr>
                <td>Reki</td>
                <td>A</td>
                <td>Kawahara</td>
            </tr>
        </table>
    </div> 
</template>

<script>
    export default 
    {
        name: 'Home',
        data () 
        {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* <link href="sharedcssfile.css" rel="stylesheet" type="text/css"> */
    table {
            font-family: arial;
            border-collapse: collapse;
            width: 100%;
        }
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
