const canvas = document.getElementById('drawingCanvas');
        const context = canvas.getContext('2d');
        let painting = false;

        function startPosition(e) {
            painting = true;
            draw(e);
        }
        

        function endPosition() {
            painting = false;
            context.beginPath();
        }

        function draw(e) {
            if (!painting) return;

            context.lineWidth = document.getElementById('sizeSlider').value;
            context.lineCap = 'round';
            context.strokeStyle = document.getElementById('colorPicker').value;

            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }

        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);