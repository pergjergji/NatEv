<!doctype html>
<!--
   GIBS Web Examples

   Copyright 2013 - 2014 United States Government as represented by the
   Administrator of the National Aeronautics and Space Administration.
   All Rights Reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
-->
<html>
    <head>
        <title>GIBS OpenLayers 2 Example - Rolling Seven Day Slider</title>

        <link rel="stylesheet" href="lib/jquery-ui-1.10.4/jquery-ui.min.css"/>
        <!-- If this stylesheet is not included here, OpenLayers will
             automatically add it when it loads making it difficult to
             override its styles -->
        <link rel="stylesheet" href="lib/openlayers-2.13.1/theme/default/style.css"/>
        <link rel="stylesheet" href="css/example.css"/>
        <link rel="stylesheet" href="css/time.css"/>

        <script src="lib/jquery-1.11.0/jquery.min.js"></script>
        <script src="lib/jquery-ui-1.10.4/jquery-ui.min.js"></script>
        <script src="lib/openlayers-2.13.1/OpenLayers.js"></script>
        <script src="js/time.js"></script>
    </head>

    <body>
        <div id="map"></div>
        <div id="day-panel">
            <div id="day-label"></div>
            <div id="day-slider"></div>
        </div>
    </body>
</html>
