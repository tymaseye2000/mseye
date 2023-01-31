window.addEventListener('load', () => {
    const form = document.querySelector("id=exampleFormControlInput1");
    const input = document.querySelector("id=exampleFormControlInput1");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;
        if (!task) {
            alert("Please fill not the task");
            return;
        }

        input.value = "";
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase()==
            "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else{
                console.log("Save")
//j'ai pas pu terminer la partie js.