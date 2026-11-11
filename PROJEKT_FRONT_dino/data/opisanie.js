export const EQUIPMENT = {

  // Платы и контроллеры
  "ESP32-WROOM-32": {
    title: "ESP32 WROOM 32",
    images: [
      "image/all_oborudovanie/plati/ESP32_WROOM_32/ESP32_WROOM_32.png",
      "image/all_oborudovanie/plati/ESP32_WROOM_32/ESP32_WROOM_32_pered.png",
      "image/all_oborudovanie/plati/ESP32_WROOM_32/ESP32_WROOM_32_zad.png"
    ],
    category: "Платы",
    description: "Модуль ESP-32 WROOM-32 - это dual-core контроллер, со встроенным Wi-Fi и Bluetooth.",
    specs: {
      "Рабочее напряжение": "3 В",
      "Аналоговых входов": "6"
    }
  },

  "NodeMCU ESP8266": {
    title: "NodeMCU ESP8266",
    images: [
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/NodeMCU_ESP8266.png",
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/NodeMCU_ESP8266_speredi.png",
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/NodeMCU_ESP8266_szadi_tochno.png"
    ],
    category: "Платы",
    description: "NodeMCU ESP8266 — это платформа для создания устройств интернета вещей (IoT), основанная на микроконтроллере ESP8266.",
    specs: {
      "Рабочее напряжение": "5 В",
      "Аналоговых входов": "2"
    }
  },

  "Raspberry Pi 4 Model B (4GB)": {
    title: "Raspberry Pi 4 Model B",
    images: [
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/Raspberry_Pi_4_Model_B_4GB.png",
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/Raspberry_Pi_4_Model_B_4GB_pered.png",
      "image/all_oborudovanie/plati/NodeMCU_ESP8266/Raspberry_Pi_4_Model_B_4GB_zad.png"
    ],
    category: "Платы",
    description: "Raspberry Pi 4 Model B (4 ГБ) — это миникомпьютер 4-го поколения на SoC BCM2711 с микросхемой SDRAM-памяти на 4 ГБ.",
    specs: {
      "Рабочее напряжение": "5 В",
      "Аналоговых входов": "3"
    }
  },

  "STM32 Nucleo F401RE": {
    title: "STM32 Nucleo F401RE",
    images: [
      "image/all_oborudovanie/plati/STM32_Nucleo_F401RE/STM32_Nucleo_F401RE.png",
      "image/all_oborudovanie/plati/STM32_Nucleo_F401RE/STM32_Nucleo_F401RE_pered.png",
      "image/all_oborudovanie/plati/STM32_Nucleo_F401RE/STM32_Nucleo_F401RE_zad.png"
    ],
    category: "Платы",
    description: "STM32 Nucleo F401RE — это отладочная плата, основанная на 32-разрядном ARM-процессоре, которая представляет собой гибкую платформу для разработчиков.",
    specs: {
      "Рабочее напряжение": "7 В"
    }
  },

  "Arduino Uno R3": {
    title: "Arduino Uno R3",
    images: [
      "image/all_oborudovanie/plati/Arduino_Uno_R3/Arduino_Uno_R3.png",
      "image/all_oborudovanie/plati/Arduino_Uno_R3/Arduino_Uno_R3_pered.png",
      "image/all_oborudovanie/plati/Arduino_Uno_R3/Arduino_Uno_R3_zad.png"
    ],
    category: "Платы",
    description: "Arduino Uno R3 — это компактная плата-микроконтроллер для обучения электронике и создания прототипов электронных устройств",
    specs: {
      "Рабочее напряжение": "3 В"
    }
  },

  "Arduino Mega 2560": {
    title: "Arduino Mega 2560",
    images: [
      "image/all_oborudovanie/plati/Arduino_Mega_2560/Arduino_Mega_2560.png",
      "image/all_oborudovanie/plati/Arduino_Mega_2560/Arduino_Mega_2560_pered.png",
      "image/all_oborudovanie/plati/Arduino_Mega_2560/Arduino_Mega_2560_zad.png"
    ],
    category: "Платы",
    description: "Arduino Mega 2560 — флагманская платформа для разработки на базе микроконтроллера ATmega2560.",
    specs: {
      "Рабочее напряжение": "3 В"
    }
  },

  // Периферия и датчики
  "Datchiki Arduino": {
    title: "Наборы датчиков для Arduino (37 в 1)",
    images: [
      "image/all_oborudovanie/periferiya/datchiki/nabor_datch_Arduino_korobka.png",
      "image/all_oborudovanie/periferiya/datchiki/nabor_datch_Arduino_osnova.png",
      "image/all_oborudovanie/periferiya/datchiki/nabor_datch_Arduino.png"
    ],
    category: "Периферия",
    description: "Набор 37-in-1 для Arduino состоит из 37 самых известных и популярных датчиков и модулей, полностью совместимых с ним.",
    specs: {
      "Количество датчиков": "37"
    }
  },

  "Maket plat": {
    title: "Макетные платы (Breadboard)",
    images: [
      "image/all_oborudovanie/periferiya/maketnie_plati/plata_belaya.png",
      "image/all_oborudovanie/periferiya/maketnie_plati/plata_beli_zeleni.png",
      "image/all_oborudovanie/periferiya/maketnie_plati/plata_zeleniy.png"
    ],
    category: "Периферия",
    description: "Макетная плата (Breadboard) — это устройство для быстрого создания и тестирования прототипов электронных устройств без применения пайки.",
    specs: {
      "Тип": "2"
    }
  },

  "Servoprivod": {
    title: "Сервоприводы SG90",
    images: [
      "image/all_oborudovanie/periferiya/servoprivod/servoprivod_SG90.png",
      "image/all_oborudovanie/periferiya/servoprivod/servoprivod_SG90_pered.png",
      "image/all_oborudovanie/periferiya/servoprivod/servoprivod_SG90_shema.png"
    ],
    category: "Периферия",
    description: "Сервопривод SG90 - это мотор-редуктор, поворачивающий выходной вал в заданное положение и удерживающий его в этом положении.",
    specs: {
      "Диапазон вращения": "180",
      "Напряжение": "4.8В"
    }
  },

  // Мультимедиа и оптика
  "Logitech C920": {
    title: "Веб-камера Logitech C920",
    images: [
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C920/Logitech_C920.png",
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C920/Logitech_C920_pered.png",
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C920/Logitech_C920_zad.png"
    ],
    category: "Мультимедиа и оптика",
    description: "Веб-камера Logitech C920 представляет собой высокотехнологичное устройство, ставшее обладателем 3-мегапиксельной матрицы CMOS.",
    specs: {
      "Матрица": "3Мп"
    }
  },

  "Logitech C270": {
    title: "Веб-камера Logitech C270",
    images: [
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C72/Logitech_C270.png",
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C72/Logitech_C270_pered.png",
      "image/all_oborudovanie/multimedia_optika/Web_camera_Logitech_C72/Logitech_C270_bok.png"
    ],
    category: "Мультимедиа и оптика",
    description: "Веб-камера Logitech HD WebCam C270 – это высококачественное устройство для видеосвязи, которое обеспечивает качественные изображение и звук.",
    specs: {
      "HD": "720p"
    }
  },

  "Epson EB X06": {
    title: "Проектор Epson EB-X06",
    images: [
      "image/all_oborudovanie/multimedia_optika/Proector_Epson_EB_X06.png",
      "image/all_oborudovanie/multimedia_optika/Proector_Epson_EB_X06_pered.png",
      "image/all_oborudovanie/multimedia_optika/Proector_Epson_EB_X06_zad.png"
    ],
    category: "Мультимедиа и оптика",
    description: "Проектор EB-X06 создавался с расчетом, чтобы установка и настройка были как можно более быстрыми.",
    specs: {
      "Яркость": "3600",
      "Зум": "1.2"
    }
  },

  "ViewSonik": {
    title: "Проектор ViewSonik",
    images: [
      "image/all_oborudovanie/multimedia_optika/Proector_ViewSonik/ViewSonik_black.png",
      "image/all_oborudovanie/multimedia_optika/Proector_ViewSonik/ViewSonik_white.png",
      "image/all_oborudovanie/multimedia_optika/Proector_ViewSonik/ViewSonik_gray.png"
    ],
    category: "Мультимедиа и оптика",
    description: "ViewSonic - это проектор, обеспечивающий высокую яркость, разрешение Full HD и качественное восприятие.",
    specs: {
      "Яркость": "3500",
      "HD": "1080p"
    }
  },

  "Lasers": {
    title: "Лазерные указки-кликеры",
    images: [
      "image/all_oborudovanie/multimedia_optika/Laser_ukazka_kliker/laser_ukazka.png",
      "image/all_oborudovanie/multimedia_optika/Laser_ukazka_kliker/laser_ukazka_black.png",
      "image/all_oborudovanie/multimedia_optika/Laser_ukazka_kliker/laser_ukazka_large.png"
    ],
    category: "Мультимедиа и оптика",
    description: "Кликер — любое устройство, издающее звук щелчка при использовании. Например, беспроводной пульт для переключения слайдов на презентации (часто снабжённый лазерной указкой).",
    specs: {
      "Цвет луча": "красный"
    }
  },

  "Document camera": {
    title: "Документ-камеры",
    images: [
      "image/all_oborudovanie/multimedia_optika/Document_camera/document_camera.png",
      "image/all_oborudovanie/multimedia_optika/Document_camera/doc_camera.png",
      "image/all_oborudovanie/multimedia_optika/Document_camera/document_cam.png"
    ],
    category: "Мультимедиа и оптика",
    description: "Документ-камера — это устройство для захвата и трансляции изображения физических объектов в режиме реального времени.",
    specs: {
      "Цвет": "черный"
    }
  },

  // Сетевое оборудование
  "Cisco Catalyst": {
    title: "Коммутаторы Cisco Catalyst",
    images: [
      "image/all_oborudovanie/setevoe_oborudovanie/Kommutators_Cisco_Catalyst/Cisco_Catalyst.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Kommutators_Cisco_Catalyst/Cisco_Catalyst_pered.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Kommutators_Cisco_Catalyst/Cisco_Catalyst_bok.png"
    ],
    category: "Сетевое оборудование",
    description: "Каждая модель коммутатора Cisco Catalyst — это масштабируемость и адаптированность под постоянно растущие потребности бизнеса.",
    specs: {
      "Цвет": "серый"
    }
  },

  "MikroTik hEX": {
    title: "Маршрутизаторы MikroTik hEX",
    images: [
      "image/all_oborudovanie/setevoe_oborudovanie/Marshrutizators_MikroTik_hEX/MikroTik_hEX.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Marshrutizators_MikroTik_hEX/MikroTik_hEX_pered.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Marshrutizators_MikroTik_hEX/MikroTik_hEX_zad.png"
    ],
    category: "Сетевое оборудование",
    description: "Роутеры (маршрутизаторы) MikroTik hEX для частного и корпоративного использования.",
    specs: {
      "Цвет": "белый с зелеными выемками"
    }
  },

  "Wi-Fi routers": {
    title: "Wi-Fi роутеры",
    images: [
      "image/all_oborudovanie/setevoe_oborudovanie/Wi_Fi_routers/Wi_Fi_router.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Wi_Fi_routers/Wi_Fi_router_white.png",
      "image/all_oborudovanie/setevoe_oborudovanie/Wi_Fi_routers/Wi_Fi_router_circle.png"
    ],
    category: "Сетевое оборудование",
    description: "Wi-Fi роутер — это активное сетевое устройство, которое принимает интернет-сигнал от провайдера и распределяет его между подключёнными устройствами",
    specs: {
      "Ограничение по людям": "40"
    }
  }

};