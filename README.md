<table width="100%">
  <tr>
    <div align="center">
      <h1>🧙🏻‍♂️ Masterclass Bootcamp RAG 🥷🏻</h1>
    </div>
  </tr>
</table>

> 🎓 **Repositorio académico** | Bootcamp  
> 📌 **Módulo:** Inteligencia Artificial / RAG — Retrieval-Augmented Generation  
> 🎯 **Objetivos:** Comprender, implementar y experimentar con arquitecturas RAG

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/JSX-61DAFB?logo=react&logoColor=black" alt="JSX">
  <img src="https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white" alt="Jupyter">
  <img src="https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white" alt="Markdown">
  <img src="https://img.shields.io/badge/PDF-EC1C24?logo=adobeacrobatreader&logoColor=white" alt="PDF">
</p>

¿Quieres entender cómo funciona un sistema **Retrieval-Augmented Generation (RAG)** y construir sus principales componentes?

Esta masterclass combina **teoría, una presentación interactiva, una demo de recuperación vectorial, ejercicios de Live Coding y evaluación**, recorriendo el funcionamiento de una arquitectura RAG desde sus fundamentos hasta una implementación práctica.

---

## 🧙🏻‍♂️ Ver Masterclass en Vivo 🥷🏻

<p align="center">
  <a href="https://masterclass-bootcamp-rag.vercel.app/">
    <img src="https://img.shields.io/badge/🧙🏻‍♂️%20%20Explorar%20RAG%20🥷🏻-9333EA?style=for-the-badge&labelColor=1E1033" alt="Explorar RAG">
  </a>
</p>

---

## 📁 ¿Qué hay en este repositorio?

```
Masterclass-Bootcamp-RAG/
│
├── 📂 docs/                                                        ← Material docente y práctico
│   ├── 📄 GUIA_DOCENTE.md                                          ← Estructura y planificación de la masterclass
│   ├── 📓 masterclass_rag_docente_solucion.ipynb                   ← Solución completa del ejercicio
│   ├── 📓 masterclass_rag_estudiantes_TODO.ipynb                   ← Notebook de trabajo
│   ├── 📓 masterclass_rag_solucion_reto_DOCENTE.ipynb              ← Solución del reto avanzado
│   └── 📕 teoria_rag.pdf                                           ← Material teórico de apoyo sobre RAG
│
├── 📂 src/                                                         ← Aplicación interactiva de la masterclass
│   │
│   ├── 📂 components/                                              ← Componentes reutilizables
│   │   ├── 🧩 Quiz.jsx                                             ← Quiz final de evaluación
│   │   ├── 🔎 RagDemo.jsx                                          ← Demo interactiva del motor RAG
│   │   └── 📑 Slide.jsx                                            ← Componente base para las diapositivas
│   │
│   ├── 📂 slides/                                                  ← Diapositivas de la masterclass
│   │   ├── 01️⃣ Slide01Cover.jsx                                    ← Introducción y portada
│   │   ├── 02️⃣ Slide02Problem.jsx                                  ← Presentación del problema
│   │   ├── 03️⃣ Slide03Metaphor.jsx                                 ← Metáfora para comprender RAG
│   │   ├── 04️⃣ Slide04Pipeline.jsx                                 ← Pipeline de una arquitectura RAG
│   │   ├── 05️⃣ Slide05Chunking.jsx                                 ← Chunking y división de documentos
│   │   ├── 06️⃣ Slide06VectorDb.jsx                                 ← Bases de datos vectoriales
│   │   ├── 07️⃣ Slide07Evaluation.jsx                               ← Evaluación de sistemas RAG
│   │   ├── 08️⃣ Slide08Demo.jsx                                     ← Introducción a la demo
│   │   └── 09️⃣ Slide09Quiz.jsx                                     ← Quiz final
│   │
│   ├── ⚛️ App.jsx                                                  ← Componente principal de la aplicación
│   ├── 🎨 App.css                                                  ← Estilos de la aplicación
│   ├── 🎨 index.css                                                ← Estilos globales
│   ├── 🚀 main.jsx                                                 ← Punto de entrada de React
│   └── 🧮 useVectorEngine.js                                       ← Motor vectorial utilizado en la demo
│
├── 📄 index.html                                                   ← HTML principal de la aplicación
├── 📦 package.json                                                 ← Dependencias y scripts del proyecto
├── 🔒 package-lock.json                                            ← Versionado de dependencias
├── ⚙️ vite.config.js                                               ← Configuración de Vite
└── 📖 README.md                                                    ← Documentación del proyecto
```

---

## 📚 ¿Qué se trabaja en la masterclass?

La aplicación está organizada en **3 bloques principales**:

| # | Sección | Contenido |
|---|---|---|
| 01 | 📊 Presentación | Conceptos fundamentales de RAG, pipeline, chunking, bases de datos vectoriales y evaluación |
| 02 | ⚡ Demo RAG | Experimentación práctica con el motor de recuperación vectorial |
| 03 | 🧠 Quiz | Evaluación de los conceptos trabajados durante la masterclass |

---

## 🖥️ Aplicación interactiva

La aplicación está desarrollada con **React + Vite** y sirve como soporte interactivo para la masterclass.

La demo RAG utiliza un **motor vectorial implementado en el frontend**, cuya lógica se encuentra en:

```text
src/useVectorEngine.js
```

El componente encargado de integrar y mostrar la demo es:

```text
src/components/RagDemo.jsx
```

La aplicación también cuenta con componentes reutilizables para las diapositivas y el quiz, organizados dentro de: 
- src/components/
- src/slides/

---

## 🗓️ ¿Cómo seguir la masterclass?

El repositorio está pensado para seguir un **orden progresivo**, desde la introducción a RAG hasta la práctica, la experimentación y la evaluación final.

### 1. 🖥️ Recorrer las diapositivas

Comienza ejecutando la aplicación y siguiendo las diapositivas en orden:

- `01` → Introducción
- `02` → El problema
- `03` → Metáfora
- `04` → Pipeline RAG
- `05` → Chunking
- `06` → Vector Database
- `07` → Evaluación
- `08` → Demo
- `09` → Quiz

Las diapositivas presentan los conceptos fundamentales de RAG y guían el desarrollo de la masterclass.

### 2. 🔎 Experimentar con la demo

Durante la presentación se utiliza la demo interactiva para experimentar con la recuperación de información.

La aplicación incluye un **motor vectorial** que permite visualizar de forma práctica algunos de los conceptos explicados durante la masterclass.

La demo corresponde al apartado:

- `Demo Rag`

### 3. 🧠 Completar el quiz

La masterclass incluye un quiz final para comprobar los conceptos trabajados durante la sesión.

El quiz corresponde al apartado:

- `Quiz`

### 4. 💻 Trabajar con los notebooks

Los notebooks contienen los **ejercicios prácticos propuestos** y sus correspondientes soluciones:

- `masterclass_rag_estudiantes_TODO.ipynb` → Notebook de trabajo con los **ejercicios propuestos**.
- `masterclass_rag_docente_solucion.ipynb` → Notebook con la **solución completa de los ejercicios**, utilizado como referencia.
- `masterclass_rag_solucion_reto_DOCENTE.ipynb` → Notebook con la **solución del reto avanzado**.

Estos notebooks permiten llevar los conceptos de las diapositivas a una implementación práctica de un sistema RAG.

### 5. 📕 Material de apoyo

Como material complementario, se incluye:

- `docs/teoria_rag.pdf` → Material teórico de apoyo sobre **Retrieval-Augmented Generation (RAG)**.

Este documento permite profundizar en los conceptos explicados durante la masterclass y sirve como referencia adicional.

---

## 🚀 Instalación

### Requisitos

- Node.js
- npm

### ▶️ Ejecutar el proyecto

```bash
git clone https://github.com/Isabela-Tellez/Masterclass-Bootcamp-RAG.git
cd Masterclass-Bootcamp-RAG
npm install
npm run dev
```

Una vez iniciado, Vite mostrará en la terminal la URL local para acceder a la masterclass.

### 🏗️ Build de producción
```bash
npm run build
npm run preview
```

---

## 📌 En resumen

Este repositorio reúne en un único lugar:

- 📚 Teoría sobre RAG.
- 👨‍🏫 Material para impartir la sesión.
- 🧑‍🎓 Material práctico con ejercicios.
- 🖥️ Slides interactivas.
- 🔎 Demo de recuperación vectorial.
- 🧩 Reto avanzado.
- 🧠 Quiz final.

---

## 👩‍💻 Autora

**Isabela Téllez**

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia incluida en el repositorio.

Consulta [`LICENSE`](./LICENSE) para conocer los términos de uso.
