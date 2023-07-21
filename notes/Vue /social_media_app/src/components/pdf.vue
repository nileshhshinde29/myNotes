<template>
    <div id="app">
        <div id="element-to-convert" style="background-color:green" class="container">
            <h1>hii this is pdf</h1>
            <h6>dfksj</h6>
            <!-- <center> -->
            <img width="400" />
            <!-- </center> -->
        </div>
        <button @click="exportToPDF">Export to PDF</button>
    </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
    name: "app",
    methods: {
        exportToPDF() {
            html2pdf(document.getElementById("element-to-convert"), {
                margin: 1,
                filename: "html.pdf",
            });
        },
    },
};
</script>

<style>
#app {}
</style>