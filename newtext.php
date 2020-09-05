
<?php
$cd = stripslashes($_POST['txtMsg']);

$file = fopen("demo.php", "w");
echo fwrite($file, $cd);

// show a success msg
echo "data successfully entered";
fclose($file);
?>
