<!DOCTYPE HTML>
<html>

<head>
    <script src="http://www.webglearth.com/v2/api.js" type="text/javascript"></script>
    <script src="js/index.js" type="text/javascript"></script>
    <script type='text/<javascript></javascript>' src='http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js'></script>
    <link rel="stylesheet" type="text/css" href="css/default.css" />
    <link rel="stylesheet" type="text/css" href="css/component.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="js/modernizr.custom.js"></script>
    <!-- bxSlider Javascript file -->

    <script src="js/index_jquery.js" type="text/javascript"></script>

    <link rel="stylesheet" type="text/css" href="css/index.css" />

    <title>NatEv | Nasa SpaceAppsChallange</title>
</head>

<body onLoad="initialize();">
    <div id="earth_div" onMouseDown="disable_rotation();" onMouseUp="enable_rotation();">


        <!-- BUTTONS ON THE LEFT FOR FILTERS-->
        <?php include 'leftButtons.php'; ?>

        <!-- RIGHT SIDE MENU-->
        <?php include 'rightMenu.php'; ?>

    </div>

    <!-- Kur Te klikohet nje Marker hapet post.php per eventin perkates-->
    <?php include 'post.php' ?>

    <div id="userInterface">
        <div id="userSignUp">
            <a class="button" href="#">
                <p>Sign Up</p>
            </a>
        </div>
        <div id="userLogIn">
            <a class="button" href="#">
                <p>Log In</p>
            </a>
        </div>
    </div>


    <div id="nasaBlacken">
        <div id="nasaContent">
            <?php include 'time.php';?>
        </div>
    </div>
    <div id="discoverButton">
        <p>Discover</p>
    </div>

    <script src="js/classie.js"></script>
    <script src="js/ext.js"></script>
    <script src="js/jquery.bxslider.min.js"></script>
    <!-- bxSlider CSS file -->
    <link href="css/jquery.bxslider.css" rel="stylesheet" />

</body>

</html>