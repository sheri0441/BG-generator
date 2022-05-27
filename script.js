const bg = document.querySelector(`main`);
const radiobtn = document.querySelectorAll(`.radio-s`);
const secondaryPanel = document.querySelectorAll(`.panel`);
const color = document.querySelectorAll(`.color-input`)
const btn =document.querySelector(`#btn`);
const basicLevel = radiobtn[0];
const linear = radiobtn[2];
const radial = radiobtn[3];
const color2 = color[1];
const color1 = color[0];

const showPanel = (num) => {
    secondaryPanel[num].style.display = `flex`
}

const basicPanel =()  => {   
    if (linear.checked){
        showPanel(0)
    } else if (radial.checked) {
        showPanel(2)
    }
}

const advancePanel = () => {
    if (linear.checked){
        showPanel(1)
    } else if (radial.checked) {
        showPanel(3)
    } else {
        showPanel(4)
    }
}

const basicLinearBackground = () => {
    const direction = document.querySelector(`#linearDirection`);
    bg.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`
}

const advanceLinearBackground= () => {
    const angle = document.querySelector(`#linearAngle`);
    bg.style.background = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})` 
}

const linearBackground = () => {
    (basicLevel.checked)?basicLinearBackground():advanceLinearBackground();
}

const  basicRadialBackground = () => {
    const position = document.querySelector(`#radialPosition`);
    const radius = document.querySelector(`#radius`);
    bg.style.background = `radial-gradient(${radius.value}em circle at ${position.value}, ${color1.value}, ${color2.value})`
}

const advanceRadialBackground = () => {
    const shape = document.querySelector(`#shape`);
    const x = document.querySelector(`#x-axis`);
    const y = document.querySelector(`#y-axis`);
    bg.style.background = `radial-gradient(${shape.value} at ${x.value}% ${y.value}%, ${color1.value}, ${color2.value})` 
}

const radialBackground = () => {
    (basicLevel.checked)?basicRadialBackground():advanceRadialBackground();
}

const advanceConicBackground = () => {
    const position = document.querySelector(`#conicPosition`);
    const radius = document.querySelector(`#conicRadius`);
    const clrDegree1 = document.querySelector(`#color1degree`);
    const clrDegree2 = document.querySelector(`#color2degree`);
    bg.style.background = `conic-gradient(at ${position.value}%  ${radius.value}%  , ${color1.value} ${clrDegree1.value}%, ${color2.value} ${clrDegree2.value}%)`
}

const conicBackground = () => {
    (basicLevel.checked)?
        bg.style.background = `conic-gradient(${color1.value}, ${color2.value})`:
        advanceConicBackground();
}

const backgrounder = () => {
    if (linear.checked){
        linearBackground()
    } else if (radial.checked ){
        radialBackground()
    } else {
        conicBackground()
    }
}

const panelCleaner = () => {
    secondaryPanel.forEach(single => single.style.display = `none`)
}

const levelCheck = () => {
    panelCleaner();
    (basicLevel.checked)?basicPanel():advancePanel();
    backgrounder();
}

const clixk = () => {
    navigator.clipboard.writeText(bg.style.background);
    let note = document.querySelector(`#note`);
    note.style.display = `block`;
    setTimeout(hideNote, 1000)
}

const hideNote = () => {
    note.style.display = `none`
}

radiobtn.forEach(item => item.addEventListener(`change`, levelCheck));
secondaryPanel.forEach(item => item.addEventListener(`change`, levelCheck));
color.forEach(clr => clr.addEventListener(`input`, levelCheck));
btn.addEventListener(`click`, clixk);
levelCheck();