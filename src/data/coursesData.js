import childPose from '../images/exercises/child_pose.png';
import catCow from '../images/exercises/cat_cow.png';
import threadNeedle from '../images/exercises/thread_needle1.png';
import shynxPose from '../images/exercises/sphynx.png';
import bendForward from '../images/exercises/bend_forward.png';
import yogiSquat from '../images/exercises/yogi_squat.png';
import seatedTwist from '../images/exercises/seated_twist.png';
import kneeHug from '../images/exercises/knee_hug.png';
import bridgePose from '../images/exercises/bridge.png';
import pigeonPose from '../images/exercises/pigeon.png';
import fullBodyStretch from '../images/exercises/full_body_stretch.png';
import twistLying from '../images/exercises/twist_lying.png';
import relaxationPose from '../images/exercises/relaxation.png';

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
    icon: 'cat',
    image: '🏔️', // Можно заменить на реальные изображения позже
    exercises: [
      { id: 1, name: 'Поза младенца', originalName: 'Childs Pose', duration: 30, image: childPose },
      { id: 2, name: 'Кошка-корова', originalName: 'Cat-Cow', duration: 30, image: catCow },
      { id: 3, name: 'Продевание нити (правая)', originalName: 'Thread the Needle R', duration: 30, image: threadNeedle },
      { id: 4, name: 'Продевание нити (левая)', originalName: 'Thread the Needle L', duration: 30, image: threadNeedle },
      { id: 5, name: 'Сфинкс', originalName: 'Sphinx Pose', duration: 30, image: shynxPose },
      { id: 6, name: 'Наклон вперёд стоя', originalName: 'Standing Forward Fold', duration: 30, image: bendForward },
      { id: 7, name: 'Поза йога-приседания', originalName: 'Yogi Squat', duration: 30, image: yogiSquat },  
      { id: 8, name: 'Скручивание сидя (правое)', originalName: 'Seated Twist R', duration: 30, image: seatedTwist },
      { id: 9, name: 'Скручивание сидя (левое)', originalName: 'Seated Twist L', duration: 30, image: seatedTwist },
      { id: 10, name: 'Обнимание коленей', originalName: 'Knees to Chest', duration: 30, image: kneeHug },
      { id: 11, name: 'Динамический мостик на плечах', originalName: 'Dynamic Shoulder Bridge', duration: 30, image: bridgePose },
      { id: 12, name: 'Поза голубя лёжа (правая)', originalName: 'Reclined Pigeon R', duration: 30, image: pigeonPose },
      { id: 13, name: 'Поза голубя лёжа (левая)', originalName: 'Reclined Pigeon L', duration: 30, image: pigeonPose },
      { id: 14, name: 'Растяжка всего тела лёжа', originalName: 'Full Body Stretch', duration: 30, image: fullBodyStretch },
      { id: 15, name: 'Скручивание лёжа (правое)', originalName: 'Lying Twist R', duration: 30, image: twistLying },
      { id: 16, name: 'Скручивание лёжа (левое)', originalName: 'Lying Twist L', duration: 30, image: twistLying },
      { id: 17, name: 'Глубокое расслабление', originalName: 'Deep Relaxation', duration: 30, image: relaxationPose }
    ]
  },
  {
    id: 2,
    title: 'Растяжка после бега',
    shortDescription: 'Восстановительная растяжка для бегунов.',
    fullDescription: 'Восстановительная растяжка для бегунов. Работа с квадрицепсами, бёдрами и подколенными сухожилиями поможет снять напряжение после бега и ускорить восстановление.',
    exercisesCount: 17,
    duration: 11,
    durationText: '11 минут',
    intensity: 'Средняя',
    category: 'Восстановление',
    image: '🏃',
    icon: 'personRunning',
    exercises: [
      { id: 1, name: 'Мобилизация спины', originalName: 'Spine mobilization', duration: 30,  },
      { id: 2, name: 'Боковая растяжка сидя (правая)', originalName: 'Seated Side Stretch R', duration: 30 },
      { id: 3, name: 'Боковая растяжка сидя (левая)', originalName: 'Seated Side Stretch L', duration: 30 },
      { id: 4, name: 'Собачья походка', originalName: 'Walk the dog', duration: 30 },
      { id: 5, name: 'Низкий выпад (правый)', originalName: 'low lunge R', duration: 30 },
      { id: 6, name: 'Растяжка квадрицепца (правая)', originalName: 'quad stretch r', duration: 30 },
      { id: 7, name: 'Растяжка бегуна (правая)', originalName: 'runers Stretch r', duration: 30 },
      { id: 8, name: 'Поза ящерицы (правая)', originalName: 'Lizard Pose R', duration: 30 },
      { id: 9, name: 'Низкий выпад (левый)', originalName: 'low lunge L', duration: 30 },
      { id: 10, name: 'Растяжка квадрицепца (левая)', originalName: 'quad stretch L', duration: 30 },
      { id: 11, name: 'Растяжка бегуна (левая)', originalName: 'runers Stretch L', duration: 30 },
      { id: 12, name: 'Поза ящерицы (левая)', originalName: 'Lizard Pose L', duration: 30 },
      { id: 13, name: 'Наклон вперед стоя', originalName: 'standing forward bend', duration: 30 },
      { id: 14, name: 'Поза йога-приседания', originalName: 'yogi squat', duration: 30 },
      { id: 15, name: 'Наклон вперед сидя', originalName: 'seated forward bend', duration: 30 },
      { id: 16, name: 'Скручивание сидя (правое)', originalName: 'Seated Twist R', duration: 30 },
      { id: 17, name: 'Скручивание сидя (левое)', originalName: 'Seated Twist L', duration: 30 },
    ]
  },
  { 
    id: 3,
    title: 'Растяжка шеи',
    shortDescription: 'Расслабляющая растяжка для шеи.',
    fullDescription: 'Этот курс идеально подходит для небольшого перерыва в офисе, чтобы снять напряжение, вызванное сидением за рабочим столом весь день.',
    exercisesCount: 14,
    duration: 10,
    durationText: '10 минут',
    intensity: 'Легкая',
    category: 'Восстановление',
    image: '🏃',
    icon: 'userCheck',
    exercises: [
      { id: 1, name: 'Кошка собака сидя', originalName: 'seated cat cow', duration: 30 },
      { id: 2, name: 'Поворот сидя (правая)', originalName: 'Seated Side twist R', duration: 30 },
      { id: 3, name: 'Диагональная боковая растяжка (правая)', originalName: 'Diagonal Side Stretch R', duration: 30 },
      { id: 4, name: 'Крылья орла (правые)', originalName: 'Eagle Arms R', duration: 30 },
      { id: 5, name: 'Поворот сидя (левая)', originalName: 'Seated Side twist L', duration: 30 },
      { id: 6, name: 'Диагональная боковая растяжка (левая)', originalName: 'Diagonal Side Stretch L', duration: 30 },
      { id: 7, name: 'Крылья орла (левые)', originalName: 'Eagle Arms L', duration: 30 },
      { id: 8, name: 'Обхватывающая шею растяжка (динамическая)', originalName: 'clasping neck stretch', duration: 30 },
      { id: 9, name: 'Обхватывающая шею растяжка (удержание)', originalName: 'clasping neck stretch hold', duration: 30 },
      { id: 10, name: 'Мобилизация спины', originalName: 'Spine mobilization', duration: 30 },
      { id: 11, name: 'Растяжка шеи (правая)', originalName: 'neck Stretch R', duration: 30 },
      { id: 12, name: 'Растяжка шеи (левая)', originalName: 'neck Stretch L', duration: 30 },
      { id: 13, name: 'Расширение грудной клетки и поворот', originalName: 'chest opener', duration: 30 },
      { id: 14, name: 'Массаж шеи', originalName: 'massage neck', duration: 30 },
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