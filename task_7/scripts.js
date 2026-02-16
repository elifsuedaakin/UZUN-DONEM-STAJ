/* 1. MENÜ AÇMA/KAPATMA (GENEL VE KOLON) */
document.addEventListener('click', (e) => {
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Board Actions Menüsü İçin
    if (e.target.closest('#menuBtn')) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    } else if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
    }

    // --- YENİ ADIM: KOLON ÜÇ NOKTA MENÜSÜNÜ AÇMA ---
    if (e.target.closest('.column-menu-btn')) {
        e.stopPropagation();
        const dropdown = e.target.closest('.column-menu-btn').nextElementSibling;
        // Diğer açık kolon menülerini kapat
        document.querySelectorAll('.col-dropdown').forEach(d => {
            if (d !== dropdown) d.classList.remove('show');
        });
        dropdown.classList.toggle('show');
    } else {
        // Başka yere basınca kolon menülerini kapat
        document.querySelectorAll('.col-dropdown').forEach(d => d.classList.remove('show'));
    }
});

/* 2. GARANTİ SÜRÜKLE - BIRAK (DEĞİŞMEDİ) */
let draggedCard = null;

document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('card')) {
        draggedCard = e.target;
        e.target.style.opacity = '0.5';
        e.dataTransfer.setData('text/plain', null); 
    }
});

document.addEventListener('dragend', (e) => {
    if (e.target.classList.contains('card')) {
        e.target.style.opacity = '1';
        draggedCard = null;
    }
});

document.addEventListener('dragover', (e) => {
    const list = e.target.closest('.card-list');
    if (list) {
        e.preventDefault(); 
    }
});

document.addEventListener('drop', (e) => {
    const list = e.target.closest('.card-list');
    if (list && draggedCard) {
        e.preventDefault();
        list.appendChild(draggedCard);
    }
});

/* 3. KART, KOLON EKLEME VE SİLME */
document.addEventListener('click', (e) => {
    // KART EKLEME
    if (e.target.closest('.add-card-btn')) {
        const text = prompt("Kart içeriği:");
        if (text) {
            const column = e.target.closest('.column');
            const list = column.querySelector('.card-list');
            const newCard = document.createElement('div');
            newCard.className = 'card';
            newCard.setAttribute('draggable', 'true'); 
            newCard.innerHTML = `<p>${text}</p>`;
            list.appendChild(newCard);
        }
    }

    // --- YENİ ADIM: KOLON EKLEME (MENÜ KUTUSU DAHİL EDİLDİ) ---
    if (e.target.closest('.add-list-btn')) {
        const title = prompt("Liste başlığı:");
        if (title) {
            const wrapper = document.querySelector('.add-list-wrapper');
            const newCol = document.createElement('div');
            newCol.className = 'column'; 
            
            // Buraya senin istediğin o menü yapısını ekledik
            newCol.innerHTML = `
                <div class="column-header">
                    <h3>${title}</h3>
                    <button class="column-menu-btn"><i class="fa-solid fa-ellipsis"></i></button>
                    <div class="col-dropdown">
                        <ul>
                            <li><i class="fa-solid fa-copy"></i> Copy List</li>
                            <li class="delete-col"><i class="fa-solid fa-trash"></i> Delete List</li>
                        </ul>
                    </div>
                </div>
                <div class="card-list"></div>
                <button class="add-card-btn"><i class="fa-solid fa-plus"></i> Add a card</button>
            `;
            wrapper.parentNode.insertBefore(newCol, wrapper);
        }
    }

    // --- YENİ ADIM: KOLON SİLME FONKSİYONU ---
    if (e.target.closest('.delete-col')) {
        const column = e.target.closest('.column');
        if (confirm(`"${column.querySelector('h3').innerText}" listesini silmek istediğine emin misin?`)) {
            column.remove();
        }
    }
});