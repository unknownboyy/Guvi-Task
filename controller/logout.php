<?php
session_abort();
setcookie("SESSION_ID",null,time()+1,'/');
header('location:../index.html');
?>