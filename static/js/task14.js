document.addEventListener('DOMContentLoaded', function () {
    // Функция плавного скролла наверх
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // Работа с заголовком
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) {
        mainHeader.addEventListener('click', function () {
            alert("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.");
        });

        mainHeader.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s';
        });

        mainHeader.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s';
        });
    }

    // Работа с фотографией студента
    const studentPhoto = document.getElementById('student-photo');
    if (studentPhoto) {
        studentPhoto.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        studentPhoto.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });

        studentPhoto.addEventListener('click', function () {
            this.src = 'static/src/logo.png';
            this.alt = 'Фото ';
        });

        studentPhoto.addEventListener('dblclick', function () {
            alert('Не кликай!');
        });
    }

    // Работа с кнопкой смены практик
    const changePracticesButton = document.getElementById('change-practices');
    if (changePracticesButton) {
        changePracticesButton.addEventListener('click', function () {
            const practicesTableBody = document.querySelector('#practices-table tbody');
            if (!practicesTableBody) return;

            const isSecondSemester = changePracticesButton.textContent === 'Посмотреть практики второго семестра';
            const topics = isSecondSemester
                ? [
                      'Базовое бэкенд-приложение',
                      'HTTP-запросы',
                      'JSON и работа с ним',
                      'HTTP-ответы',
                      'Проектирование API',
                      'Роутинг и его настройка',
                      'NoSQL базы данных',
                      'Обеспечение авторизации и доступа пользователей',
                      'Работа сторонних сервисов уведомления и авторизации',
                      'Основы ReactJS',
                      'Работа с компонентами динамической DOM',
                      'Использование хуков в React',
                      'Основы микросервисной архитектуры',
                      'Разработка классических модулей веб-приложений',
                      'Разработка классических модулей веб-приложений',
                  ]
                : [
                      'Основы языка HTML',
                      'Формы и кнопки в HTML',
                      'Таблицы и интерактивные элементы в HTML',
                      'Основы работы с CSS',
                      'Работа с классами в CSS',
                      'Работа с сетками и разметкой в HTML',
                      'Адаптивная верстка',
                      'Bootstrap',
                      'Основы языка JavaScript',
                      'Базовые задачи на JS',
                      'DOM-структура приложений и работа с объектами на языке JS',
                      'Встраивание скриптов',
                      'Отладка сценариев',
                      'Анимации и работа с ними',
                      'Github',
                      'Защита проекта',
                  ];

            practicesTableBody.innerHTML = '';
            topics.forEach((topic, index) => {
                const row = document.createElement('tr');
                row.className = index % 2 === 0 ? 'tr_even' : 'tr_odd';
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${topic}</td>
                    <td><input type="checkbox"></td>
                    <td><input type="checkbox"></td>
                `;
                practicesTableBody.appendChild(row);
            });

            changePracticesButton.textContent = isSecondSemester
                ? 'Посмотреть практики первого семестра'
                : 'Посмотреть практики второго семестра';
        });
    }

    // Работа с параграфами
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function () {
            this.style.backgroundColor = getRandomColor();
            this.style.transition = 'background-color 1s';
        });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Работа с таблицей лекций
    const lecturesTable = document.querySelector('.table-60');
    if (lecturesTable) {
        lecturesTable.style.display = 'none';

        const showLecturesButton = document.createElement('button');
        showLecturesButton.textContent = 'Показать лекции';

        const buttonPlace = document.querySelector('.lecturesh2');
        if (buttonPlace) {
            buttonPlace.parentNode.replaceChild(showLecturesButton, buttonPlace);
        }

        showLecturesButton.addEventListener('click', function () {
            if (lecturesTable.style.display === 'none') {
                lecturesTable.style.display = 'block';
                lecturesTable.style.opacity = 0;
                setTimeout(() => {
                    lecturesTable.style.opacity = 1;
                    lecturesTable.style.transition = 'opacity 0.5s';
                }, 10);
                showLecturesButton.textContent = 'Скрыть лекции';
            } else {
                lecturesTable.style.opacity = 0;
                setTimeout(() => {
                    lecturesTable.style.display = 'none';
                }, 500);
                showLecturesButton.textContent = 'Показать лекции';
            }
        });
    }

    // Работа с фотографией 2
    const studentPhoto2 = document.getElementById('student-photo2');
    if (studentPhoto2) {
        studentPhoto2.addEventListener('mouseover', function () {
            this.style.transform = 'rotate(30deg)';
            this.style.transition = 'transform 0.3s';
        });

        studentPhoto2.addEventListener('mouseout', function () {
            this.style.transform = 'rotate(0deg)';
        });
    }
});
