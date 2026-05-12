self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

function getAssetUrl(pathname) {
  return new URL(pathname, self.registration.scope).toString();
}

self.addEventListener('notificationclick', (event) => {
  const data = event.notification.data || {};
  const action = event.action;
  event.notification.close();

  if (action === 'show-answer' && data.answerNotification) {
    const answer = data.answerNotification;
    event.waitUntil(
      self.registration.showNotification(answer.title || 'Đáp án tiếng Anh', {
        body: answer.body || 'Không có dữ liệu đáp án.',
        icon: answer.icon || getAssetUrl('./pwa-icon.svg'),
        badge: answer.badge || getAssetUrl('./pwa-icon.svg')
      })
    );
    return;
  }

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(self.registration.scope);
      }
      return null;
    })
  );
});
