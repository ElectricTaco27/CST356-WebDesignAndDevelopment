<template>
    <div>
        <h1 class ="testClass">Student Table</h1>
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Email Address</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in students" :key="student.id">
                    <td> {{ student.id }} </td>
                    <td> {{ student.email }} </td>
                </tr>
            </tbody>
        </table>
    </div> 
</template>

<script>
    export default { 
        name: 'Students',
        data () {
            return {
                students: 
                [
                    {"id": 0,"email": "SAO@Gmail.com"},
                    {"id": 1,"email": "DanMachi@Hotmail.com"},
                    {"id": 2,"email": "FatalBullet@Yahoo.com"},
                    {"id": 3,"email": "Apex@Aol.com"},
                    {"id": 4,"email": "Crunchyroll@Gmail.com"}
                ]
            }
        },
        methods: 
        {
            getStudents: function() 
            {
                return JSON.parse(testStudents).students; 
            }
        },
        mounted() {
            this.getStudents();
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
    tr:nth-child(even){
        background-color: #dddddd;
    }
</style>
