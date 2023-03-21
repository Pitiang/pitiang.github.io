const btnHitungBmi = document.getElementById('btnHitungBmi');
const btnReset = document.getElementById('btnReset');

btnHitungBmi.addEventListener('click', function(e) {
    e.preventDefault();

    let beratBadan = document.getElementById('berat_badan').value;
    let tinggiBadan = document.getElementById('tinggi_badan').value;

    if (beratBadan && tinggiBadan) {
        let bmi = beratBadan / ((tinggiBadan / 100) ** 2);
        bmi = bmi.toFixed(1);

        const hasil = document.getElementById('hasil');
        hasil.innerHTML = '';


        const node = document.createElement('p');
        const node2 = document.createElement('h1');
        const node3 = document.createElement('p');

        
        var keterangan = "";

        if (bmi < 18.5) {
            // Kekurangan berat badan
            const text1 = document.createTextNode('Kekurangan berat badan');
            const text2 = document.createTextNode(bmi);
            const text3 = document.createTextNode('Anda kekurangan berat badan');
            
            keterangan = "<br>Anda memiliki berat badan kurang dari normal dan dapat mengalami masalah kesehatan seperti lemahnya sistem imun, anemia, dan masalah tulang.<br><br> Solusinya adalah meningkatkan asupan kalori dan nutrisi melalui makanan yang sehat dan berolahraga secara teratur.";
            node.appendChild(text1);
            node2.appendChild(text2);
            node3.appendChild(text3);

            hasil.appendChild(node);
            hasil.appendChild(node2);
            hasil.appendChild(node3);
            document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : <br>" + keterangan;
        } else if (bmi < 24.9) {
            // Normal (ideal)
            const text1 = document.createTextNode('Berat badan normal');
            const text2 = document.createTextNode(bmi);
            const text3 = document.createTextNode('Anda memiliki berat badan normal');
            keterangan = "<br>Selamat! anda memiliki berat badan yang normal, berat badan normal akan memiliki resiko yang lebih rendah terhadap penyakit jantung, stroke, dan penyakit kronis lain.<br><br>Pertahankanlah berat badan dan kesehatan anda.";
            node.appendChild(text1);
            node2.appendChild(text2);
            node3.appendChild(text3);

            hasil.appendChild(node);
            hasil.appendChild(node2);
            hasil.appendChild(node3);
            document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : <br>" + keterangan;
        } else if (bmi < 29.9) {
            // Kelebihan berat badan
            const text1 = document.createTextNode('Kelebihan berat badan');
            const text2 = document.createTextNode(bmi);
            const text3 = document.createTextNode('Anda memiliki berat badan berlebih');
            keterangan = "<br>Anda memiliki berat badan berlebih dan memiliki resiko lebih tinggi untuk terkena penyakit seperti diabetes, tekanan darah tinggi, penyakit jantung, stroke, dan kanker tertentu.<br><br>Solusinya adalah dengan cara mengatur pola makan, mengurangi asupan kalori secara bertahap, dan berolahraga secara teratur";
            node.appendChild(text1);
            node2.appendChild(text2);
            node3.appendChild(text3);

            hasil.appendChild(node);
            hasil.appendChild(node2);
            hasil.appendChild(node3);
            document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : <br>" + keterangan;
        } else {
            // Kegemukan (Obesitas)
            const text1 = document.createTextNode('Kegemukan berat badan');
            const text2 = document.createTextNode(bmi);
            const text3 = document.createTextNode('Anda memiliki berat badan gemuk');
            keterangan = "<br>Anda termasuk ke kategori obesitas, anda memiliki resiko tinggi terhadap penyakit kesehatan yang serius seperti diabetes.<br><br>Solusinya adalah anda sangat disarankan mengatur pola makan dengan cara mengurangi asupan kalori secara teratur dan berolahraga yang ringan secara teratur.";
            node.appendChild(text1);
            node2.appendChild(text2);
            node3.appendChild(text3);

            hasil.appendChild(node);
            hasil.appendChild(node2);
            hasil.appendChild(node3);
            document.getElementById("keterangan-lengkap").innerHTML = "Keterangan : <br>" + keterangan;
        }

        
    }
});

btnReset.addEventListener('click', function(e) {
    e.preventDefault();

    const hasil = document.getElementById('hasil');
    hasil.innerHTML = '';
});