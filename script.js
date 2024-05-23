document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    const viewSchedule = document.getElementById("view-schedule");
    const createSchedule = document.getElementById("create-schedule");
    const createButton = document.getElementById("create-button");
    const backButton = document.getElementById("back-button");
    const doneButton = document.getElementById("done-button");
  
    const showView = (view) => {
      if (view === "view-schedule") {
        viewSchedule.classList.add("active");
        createSchedule.classList.remove("active");
      } else {
        createSchedule.classList.add("active");
        viewSchedule.classList.remove("active");
      }
    };
  
    createButton.addEventListener("click", () => {
      showView("create-schedule");
    });
  
    backButton.addEventListener("click", () => {
      showView("view-schedule");
    });
  
    doneButton.addEventListener("click", () => {
      alert("Good job! You've done it!");
    });
  
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const location = document.getElementById("location").value;
      const startDay = document.getElementById("start-day").value;
      const endDay = document.getElementById("end-day").value;
      const startTime = document.getElementById("start-time").value;
      const endTime = document.getElementById("end-time").value;
  
      const task = document.createElement("li");
      task.classList.add("task");
      task.innerHTML = `
        <div class="task-details">
          <span><strong>Activity:</strong> ${name}</span>
          <span><strong>Location:</strong> ${location}</span>
          <span><strong>Date:</strong> ${startDay} to ${endDay}</span>
          <span><strong>Time:</strong> ${startTime} - ${endTime}</span>
        </div>
        <div class="task-actions">
          <span class="delete">Delete</span>
          <span class="update">Update</span>
        </div>
      `;
  
      taskList.appendChild(task);
  
      document.getElementById("name").value = "";
      document.getElementById("location").value = "";
      document.getElementById("start-day").value = "";
      document.getElementById("end-day").value = "";
      document.getElementById("start-time").value = "";
      document.getElementById("end-time").value = "";
  
      task.querySelector(".delete").addEventListener("click", () => {
        task.remove();
      });
  
      task.querySelector(".update").addEventListener("click", () => {
        const newName = prompt("Update name:", name);
        const newLocation = prompt("Update location:", location);
        const newStartDay = prompt("Update start day:", startDay);
        const newEndDay = prompt("Update end day:", endDay);
        const newStartTime = prompt("Update start time:", startTime);
        const newEndTime = prompt("Update end time:", endTime);
  
        if (newName !== null) name = newName;
        if (newLocation !== null) location = newLocation;
        if (newStartDay !== null) startDay = newStartDay;
        if (newEndDay !== null) endDay = newEndDay;
        if (newStartTime !== null) startTime = newStartTime;
        if (newEndTime !== null) endTime = newEndTime;
  
        task.innerHTML = `
          <div class="task-details">
            <span><strong>Activity:</strong> ${name}</span>
            <span><strong>Location:</strong> ${location}</span>
            <span><strong>Date:</strong> ${startDay} to ${endDay}</span>
            <span><strong>Time:</strong> ${startTime} - ${endTime}</span>
          </div>
          <div class="task-actions">
            <span class="delete">Delete</span>
            <span class="update">Update</span>
          </div>
        `;
  
        task.querySelector(".delete").addEventListener("click", () => {
          task.remove();
        });
  
        task.querySelector(".update").addEventListener("click", () => {
          const newName = prompt("Update name:", name);
          const newLocation = prompt("Update location:", location);
          const newStartDay = prompt("Update start day:", startDay);
          const newEndDay = prompt("Update end day:", endDay);
          const newStartTime = prompt("Update start time:", startTime);
          const newEndTime = prompt("Update end time:", endTime);
  
          if (newName !== null) name = newName;
          if (newLocation !== null) location = newLocation;
          if (newStartDay !== null) startDay = newStartDay;
          if (newEndDay !== null) endDay = newEndDay;
          if (newStartTime !== null) startTime = newStartTime;
          if (newEndTime !== null) endTime = newEndTime;
  
          task.innerHTML = `
            <div class="task-details">
              <span><strong>Activity:</strong> ${name}</span>
              <span><strong>Location:</strong> ${location}</span>
              <span><strong>Date:</strong> ${startDay} to ${endDay}</span>
              <span><strong>Time:</strong> ${startTime} - ${endTime}</span>
            </div>
            <div class="task-actions">
              <span class="delete">Delete</span>
              <span class="update">Update</span>
            </div>
          `;

          task.querySelector(".delete").addEventListener("click", () => {
            task.remove();
          });
  
          task.querySelector(".update").addEventListener("click", () => {
            // Recursively call the same update function
          });
        });
      });
  
      showView("view-schedule");
    });
  
    showView("view-schedule");
  });