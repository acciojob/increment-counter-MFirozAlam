<!DOCTYPE html>
<html>
<head>
    <title>Increment Counter</title>
</head>
<body>

    <p id="counter">0</p>

    <button id="incrementBtn">Increment</button>

    <script>
        let count = 0;

        document.getElementById("incrementBtn").addEventListener("click", function () {

            alert(count);

            count++;

            document.getElementById("counter").innerText = count;
        });
    </script>

</body>
</html>