1️⃣ What is Drag & Drop (concept first)

Drag & Drop has two sides:

1. Draggable element → the thing you move
2. Drop zone → where you release it

The browser fires events during this process.


8️⃣ Common mistakes (don’t repeat these)

❌ Forgetting draggable="true"
❌ Forgetting event.preventDefault() in dragover
❌ Trying to use mousemove instead of Drag API
❌ Overusing libraries before understanding basics

9️⃣ When NOT to use HTML Drag API

Be honest with yourself:

❌ Mobile-heavy apps → bad support
❌ Complex animations → use custom JS
❌ Games → use canvas

For dashboards, Kanban boards, file managers → HTML Drag API is perfect.