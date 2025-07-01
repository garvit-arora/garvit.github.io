const text = "Building cool stuff with AI/ML";
    const speed = 100; 
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("type").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();