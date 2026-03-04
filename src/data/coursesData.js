const coursesData = [
  {
    id: 1,
    title: 'Поясница',
    shortDescription: 'Мягкая практика для снятия напряжения и боли в пояснице.',
    fullDescription: 'Мягкая практика для снятия напряжения и боли в пояснице. Глубокие скручивания и расслабляющие позы помогут расслабить мышцы спины, улучшить подвижность и снять дискомфорт.',
    exercisesCount: 17,
    duration: 12,
    durationText: '12 минут',
    intensity: 'Низкая',
    category: 'Расслабление',
    image: '🏔️', // Можно заменить на реальные изображения позже
    exercises: [
      { id: 1, name: 'Поза младенца', originalName: 'Child\'s Pose', duration: 30 },
      { id: 2, name: 'Кошка-корова', originalName: 'Cat-Cow', duration: 30 },
      { id: 3, name: 'Продевание нити (правая)', originalName: 'Thread the Needle R', duration: 30 },
      { id: 4, name: 'Продевание нити (левая)', originalName: 'Thread the Needle L', duration: 30 },
      { id: 5, name: 'Сфинкс', originalName: 'Sphinx Pose', duration: 30 },
      { id: 6, name: 'Наклон вперёд стоя', originalName: 'Standing Forward Fold', duration: 30 },
      { id: 7, name: 'Поза йога-приседания', originalName: 'Yogi Squat', duration: 30 },
      { id: 8, name: 'Скручивание сидя (правое)', originalName: 'Seated Twist R', duration: 30 },
      { id: 9, name: 'Скручивание сидя (левое)', originalName: 'Seated Twist L', duration: 30 },
      { id: 10, name: 'Обнимание коленей', originalName: 'Knees to Chest', duration: 30 },
      { id: 11, name: 'Динамический мостик на плечах', originalName: 'Dynamic Shoulder Bridge', duration: 30 },
      { id: 12, name: 'Поза голубя лёжа (правая)', originalName: 'Reclined Pigeon R', duration: 30 },
      { id: 13, name: 'Поза голубя лёжа (левая)', originalName: 'Reclined Pigeon L', duration: 30 },
      { id: 14, name: 'Растяжка всего тела лёжа', originalName: 'Full Body Stretch', duration: 30 },
      { id: 15, name: 'Скручивание лёжа (правое)', originalName: 'Lying Twist R', duration: 30 },
      { id: 16, name: 'Скручивание лёжа (левое)', originalName: 'Lying Twist L', duration: 30 },
      { id: 17, name: 'Глубокое расслабление', originalName: 'Deep Relaxation', duration: 30 }
    ]
  },
  {
    id: 2,
    title: 'Растяжка после бега',
    shortDescription: 'Восстановительная растяжка для бегунов.',
    fullDescription: 'Восстановительная растяжка для бегунов. Работа с квадрицепсами, бёдрами и подколенными сухожилиями поможет снять напряжение после бега и ускорить восстановление.',
    exercisesCount: 14,
    duration: 10,
    durationText: '10 минут',
    intensity: 'Средняя',
    category: 'Восстановление',
    image: '🏃',
    exercises: [
      { id: 1, name: 'Выпад с захватом стопы (правая)', originalName: 'Standing Quad Stretch R', duration: 30 },
      { id: 2, name: 'Выпад с захватом стопы (левая)', originalName: 'Standing Quad Stretch L', duration: 30 },
      { id: 3, name: 'Наклон к прямой ноге стоя (правая)', originalName: 'Standing Hamstring Stretch R', duration: 30 },
      { id: 4, name: 'Наклон к прямой ноге стоя (левая)', originalName: 'Standing Hamstring Stretch L', duration: 30 },
      { id: 5, name: 'Растяжка икр у стены (правая)', originalName: 'Calf Stretch R', duration: 30 },
      { id: 6, name: 'Растяжка икр у стены (левая)', originalName: 'Calf Stretch L', duration: 30 },
      { id: 7, name: 'Бабочка', originalName: 'Butterfly Stretch', duration: 30 },
      { id: 8, name: 'Растяжка груши (правая)', originalName: 'Piriformis Stretch R', duration: 30 },
      { id: 9, name: 'Растяжка груши (левая)', originalName: 'Piriformis Stretch L', duration: 30 },
      { id: 10, name: 'Наклон сидя к ногам', originalName: 'Seated Forward Fold', duration: 30 },
      { id: 11, name: 'Поза голубя (правая)', originalName: 'Pigeon Pose R', duration: 30 },
      { id: 12, name: 'Поза голубя (левая)', originalName: 'Pigeon Pose L', duration: 30 },
      { id: 13, name: 'Скручивание лёжа (правое)', originalName: 'Supine Twist R', duration: 30 },
      { id: 14, name: 'Скручивание лёжа (левое)', originalName: 'Supine Twist L', duration: 30 }
    ]
  }
];

// Хелпер функция для получения курса по ID
export const getCourseById = (id) => {
  return coursesData.find(course => course.id === parseInt(id));
};

// Хелпер функция для получения всех курсов
export const getAllCourses = () => coursesData;

export default coursesData;