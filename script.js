const body = document.querySelector(`body`);
const basicLevel = document.querySelector(`#basic`);
const advanceLevel = document.querySelector(`#advance`);
const gradientType = document.querySelector(`#type`);
const linear_p = document.querySelector(`#linear_p`);
const b_linear = document.querySelector(`#basicLinear`);
const degree = document.querySelector(`#degree`);
const b_linear_p = document.querySelector(`#b_linear_P`);
const a_linear_p = document.querySelector(`#a_linear_p`);
const color1 = document.querySelector(`#color1`);
const color2 = document.querySelector(`#color2`);
const b_radial_p = document.querySelector(`#b_radial_p`);
const position = document.querySelector(`#position`);
const radius = document.querySelector(`#radius`);
const radius_p = document.querySelector(`#radius_p`);
const shape_p = document.querySelector(`#shape_p`);
const conic_p = document.querySelector(`#conic`);
const c_degree_1 = document.querySelector(`#conicdegree1`);
const c_degree_2 = document.querySelector(`#conicdegree2`);
const shape = document.querySelector(`#shape`);
const showBtn = document.querySelector(`body`);
const css = document.getElementById(`bgText`);
const panel = document.querySelector(`.panel`);

const linearBasic = () => {
    linear_p.style.display = `block`;
    b_linear_p.style.display = `flex`;
    body.style.background = `linear-gradient(to ${b_linear.value}, ${color1.value}, ${color2.value})`;
}
const radialBasic = () => {
    b_radial_p.style.display = `flex`;
    radius_p.style.display = `flex`;
    body.style.background = `radial-gradient(${radius.value}em circle at ${position.value}, ${color1.value}, ${color2.value})`;
}
const conicBasic = () => {
    body.style.backgroundImage = `conic-gradient(${color1.value}, ${color2.value})`;
}

const basicPlane = () => {
    switch (gradientType.value){
        case "Linear":
            linearBasic();
            break;
        case "Radial":
            radialBasic();
             break;
        case "Conic":
            conicBasic();
            break;
    }
}

const centervalue = () => {
    shape[0].style.display = `none`; 
    shape[1].style.display = `none`; 
    shape[2].style.display = `block`;
    shape[3].style.display = `block`;
}
const n_centervalue = () => {
    shape[0].style.display = `block`; 
    shape[1].style.display = `block`;
    shape[2].style.display = `none`;
    shape[3].style.display = `none`;
}

const linearAdvance = () => {
    linear_p.style.display = `block`;
    a_linear_p.style.display = `block`;
    body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
}
const radialAdvance = () => {
    b_radial_p.style.display = `flex`;
    shape_p.style.display = `flex`;
    (position.value === `center`) ? centervalue() : n_centervalue();
    body.style.background = `radial-gradient(${shape.value} at ${position.value}, ${color1.value}, ${color2.value})`;
}
const conicAdvance = () => {
    conic_p.style.display = "flex";
    body.style.backgroundImage = `conic-gradient(${color1.value} ${c_degree_1.value}deg, ${color2.value} ${c_degree_2.value}deg)`;

}

const advancePlane = () => {
    switch (gradientType.value){
        case "Linear":
            linearAdvance();
            break;
        case "Radial":
            radialAdvance();
            break;
        case "Conic":
            conicAdvance();
            break;
    }
}

const nulify = () => {
    linear_p.style.display = `none`;
    b_linear_p.style.display = `none`;
    a_linear_p.style.display = `none`;
    b_radial_p.style.display = `none`;
    radius_p.style.display = `none`;
    shape_p.style.display = `none`;
    conic_p.style.display = `none`;
}
const controller = () => {
    nulify();
    (basicLevel.checked) ? basicPlane() : advancePlane();
    css.textContent = body.style.background
}

const hidePanel = () => {
    panel.style.display = `none`;
    showBtn.addEventListener(`click`, showPanel);
}
const showPanel = () => {
    panel.style.display = `flex`;
}

basicLevel.addEventListener(`change`, controller );
advanceLevel.addEventListener(`change`, controller );
gradientType.addEventListener(`change`, controller);
b_linear.addEventListener(`change`, controller);
degree.addEventListener(`change`, controller);
radius.addEventListener(`change`, controller);
position.addEventListener(`change`, controller);
shape.addEventListener(`change`, controller);
color1.addEventListener(`input`, controller);
color2.addEventListener(`input`, controller);
c_degree_1.addEventListener(`change`, controller);
c_degree_2.addEventListener(`change`, controller);
showBtn.addEventListener(`dblclick`, hidePanel);
controller();