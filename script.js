fetch("data.json")
  .then(response => response.json())
  .then(data => {
    renderAnnouncements(data.announcements)
    renderEvents(data.events)
  })

function renderAnnouncements(items) {
  const list = document.getElementById("announcement-list")
  items.forEach(item => {
    const li = document.createElement("li")
    if (item.link) {
      const a = document.createElement("a")
      a.href = item.link
      a.textContent = item.text
      li.appendChild(a)
    } else {
      li.textContent = item.text
    }
    list.appendChild(li)
  })
}

function renderEvents(events) {
  const container = document.getElementById("event-list")
  events.forEach(event => {
    const div = document.createElement("div")
    div.className = "event"
    div.innerHTML = `
      <div class="event-date">${event.date}</div>
      <div class="event-title">${event.title}</div>
      <div class="event-venue">${event.venue}</div>
      <div class="event-time">${event.time}</div>
    `
    container.appendChild(div)
  })
}
