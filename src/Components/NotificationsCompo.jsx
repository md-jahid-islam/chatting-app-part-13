import React from 'react'

const Notifications = () => {
    const notifications = [
        {
          id: 1,
          title: 'New Comments',
          message: 'Someone commented on your post.',
          timestamp: '2 hours ago',
          status: 'unread',
        },  
        {
          id: 2,
          title: 'New Like',
          message: 'Your post has a new like.',
          timestamp: '2 hours ago',
          status: 'green',
        },
        {
          id: 3,
          title: 'Friend Request',
          message: 'Hridoy sent you a friend request.',
          timestamp: '1 day ago',
          status: 'unread',
        },
      ];
  return (
    <>
         <div className="max-w-3xl mx-auto p-4 scroll-px-24 scroll-py-24 mt-16 duration-300 h-[400px] rounded-md hover:scale-105 transition bg-[#4C3BCF]">
            <h1 className="text-2xl font-bold mb-6">Notifications</h1>
            <div className="space-y-4">
            {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-md transition-all duration-200 ${
              notification.status === 'unread'
                ? 'bg-blue-100 border-l-4 border-blue-500'
                : 'bg-white border-l-4 border-gray-300'
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{notification.title}</h2>
              <span className="text-gray-500 text-sm">{notification.timestamp}</span>
            </div>
            <p className="text-gray-700 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default Notifications;