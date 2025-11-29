# 🧠 Agente de Desarrollo — Portafolio Personal de Francisco X. Vera F.

## 🎯 Objetivo General
Construir un **portafolio profesional** con **React**, **TailwindCSS** y **Framer Motion**, que refleje la **personalidad, profesionalismo, serenidad y elegancia** de Francisco X. Vera F., mostrando su trabajo de forma **moderna**, **oscura** y **minimalista**, con animaciones sutiles y una navegación fluida.

---

## 🧱 Stack Tecnológico
- **Frontend:** React + Vite  
- **Estilos:** TailwindCSS  
- **Animaciones:** Framer Motion  
- **Iconografía:** Lucide Icons  
- **Gestión de tareas:** Tickets derivados de historias de usuario  
- **Control de calidad:** Criterios de aceptación estilo Gherkin

---

## 🎨 Identidad Visual

### Paleta de Colores
Basada en los colores del moodboard:
- `#121212` (fondo principal)  
- `#2C2C2E` (secciones secundarias)  
- `#7BAA8F` (color de acento principal) 
- `#4A90E2` (color de acento secundario) 
- `#F5F5F7` (texto claro sobre fondo oscuro)  
- `#C0C0C0` (texto secundario)  

### Estilo
- **Minimalista**, **oscuro** y **elegante**
- Uso de **espacios amplios** y **animaciones suaves**
- Tipografía moderna y sobria
- Íconos lineales y consistentes (Lucide)

### Sensación a transmitir
- **Profesionalismo y confianza**
- **Justicia y bondad**
- **Serenidad**
- Estilo **oscuro** pero **acogedor**, con **luces sutiles**

---

## 🧭 Reglas de Diseño

1. El diseño debe reflejar una **marca personal auténtica**, sin caer en clichés corporativos.
2. Las animaciones deben ser **suaves**, no distractoras.
3. El contenido debe priorizar **claridad** y **organización visual**.
4. Cada componente debe ser **reutilizable** y **modular**.
5. El sitio debe ser **totalmente responsivo**.
6. Los **colores oscuros** dominan, los acentos se usan para dirigir la atención.

---

## 🧰 Funcionalidades Principales (Historias de Usuario)

### 1. Home
**Como** visitante,  
**quiero** ver una introducción clara del portafolio,  
**para** entender quién es Francisco y qué hace.  

### 2. Sobre mí
**Como** visitante,  
**quiero** conocer la historia, valores y experiencia de Francisco,  
**para** confiar en su perfil profesional.  

### 3. Proyectos
**Como** visitante,  
**quiero** explorar los proyectos destacados,  
**para** ver ejemplos reales de su trabajo.  

### 4. Contacto
**Como** visitante,  
**quiero** poder contactar fácilmente con Francisco,  
**para** ofrecerle oportunidades o colaboraciones.

---

## ✅ Criterios de Aceptación (Formato Gherkin)

```gherkin
Feature: Página principal del portafolio
  Scenario: Visualizar la sección de introducción
    Given que el usuario entra al sitio
    When carga la página principal
    Then se muestra una sección hero con nombre, rol y CTA
    And la animación de entrada es fluida

Feature: Visualizar proyectos
  Scenario: Listado de proyectos
    Given que el usuario navega a la sección "Proyectos"
    When se cargan los proyectos
    Then cada tarjeta muestra título, descripción, tecnologías y enlace

Feature: Formulario de contacto
  Scenario: Enviar un mensaje
    Given que el usuario completa todos los campos requeridos
    When hace clic en "Enviar"
    Then se muestra una confirmación de envío

---

##Estructura Modular

/src
 ├── components/
 │    ├── Hero.jsx
 │    ├── About.jsx
 │    ├── Projects.jsx
 │    ├── ContactForm.jsx
 │    └── Navbar.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── About.jsx
 │    ├── Projects.jsx
 │    └── Contact.jsx
 ├── data/
 │    └── projects.json
 ├── assets/
 └── App.jsx

 ---

 ### 🤖 Reglas para la IA

Seguir estrictamente la identidad visual definida.

Priorizar componentes claros, reutilizables y animados con sutileza.

Responder siempre en base a los criterios de aceptación.

Generar tickets detallados cuando se añadan nuevas historias de usuario.

No usar plantillas genéricas de portafolio; debe tener identidad única.

