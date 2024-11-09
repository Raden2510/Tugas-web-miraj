// Fungsi untuk men-toggle konten berdasarkan id
function toggleContent(id) {
    const allContents = document.querySelectorAll('.section-content');
    const content = document.getElementById(id);

    // Tutup semua konten lainnya
    allContents.forEach(c => {
        if (c !== content) {
            c.style.maxHeight = '0';
            setTimeout(() => c.style.display = 'none', 300);
        }
    });

    // Buka atau tutup konten yang dipilih
    if (content.style.display === 'block') {
        content.style.maxHeight = '0';
        setTimeout(() => content.style.display = 'none', 300);
    } else {
        content.style.display = 'block';
        setTimeout(() => content.style.maxHeight = content.scrollHeight + 'px', 10);
    }
}

// Fungsi pencarian penyakit
function searchDisease() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const buttons = document.querySelectorAll('.btn-toggle');
    let found = false;

    buttons.forEach(button => {
        const diseaseName = button.textContent.toLowerCase();
        if (query && diseaseName.includes(query)) {
            button.classList.add('found');
            found = true;
        } else {
            button.classList.remove('found');
        }
    });

    const message = document.getElementById('not-found-message');
    if (query && !found) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }

    // Reset button styles if input is empty
    if (!query) {
        buttons.forEach(button => button.classList.remove('found'));
    }
}
