document.addEventListener("DOMContentLoaded", () => {
    const correctPassword = '7385'; // Set your password here
    const downloadLink = 'https://www.mediafire.com/file/s4p0p9nhy4k0s7r/TikTok+v36.2.5+(Mod)+arm8.apk/file'; // Correct link

    const submitButton = document.getElementById('submit-btn');
    const passwordInput = document.getElementById('password');

    submitButton.addEventListener('click', () => {
        const password = passwordInput.value;

        if (password === correctPassword) {
            // Show success toast
            toast.success('Successful! Opening the link in a new tab.');
            const a = document.createElement('a');
            a.href = downloadLink;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            // Show error toast
            toast.error('Incorrect password. Try again!');
        }
    });

    // Populate TikTok and YouTube lists
    const tiktokFollowers = [
        "1k__Follower.......... 230",
        "2k__Follower.......... 360",
        "4k__Follower.......... 620",
        "5k__Follower.......... 750",
        "10k_Follower.......... 1400",
        "20k_Follower.......... 2700"
    ];

    const tiktokLikes = [
        "1k___Likes.......... 200",
        "2k___Likes.......... 300",
        "4k___Likes.......... 500",
        "5k___Likes.......... 600",
        "10k__Likes.......... 1100",
        "20k__Likes.......... 2100",
        "30k__Likes.......... 3100"
    ];

    const tiktokViews = [
        "50k__Views........ 150",
        "100k___Views........ 200",
        "200k___Views........ 300",
        "400k___Views........ 500",
        "500k___Views........ 620",
        "1M__Views........ 1100",
        "2M__Views........ 2100"
    ];

    const youtubeSubscribers = [
        "1k__Subscriber......... 230",
        "2k__Subscriber......... 360",
        "5k__Subscriber......... 750",
        "10k__Subscriber......... 400",
        "22k__Subscriber......... 950"
    ];

    const youtubeViews = [
        "5k__Views......2900",
        "10k___Views......5700",
        "15k___Views......8500",
        "20k___Views......11300"
    ];

    const youtubeLikes = [
        "1k___Likes........ 480",
        "2k___Likes........ 860",
        "4k___Likes........ 1620",
        "5k___Likes........ 2000"
    ];

    const tiktokFollowersList = document.getElementById('tiktok-followers');
    tiktokFollowers.forEach(follower => {
        const li = document.createElement('li');
        li.textContent = follower;
        tiktokFollowersList.appendChild(li);
    });

    const tiktokLikesList = document.getElementById('tiktok-likes');
    tiktokLikes.forEach(like => {
        const li = document.createElement('li');
        li.textContent = like;
        tiktokLikesList.appendChild(li);
    });

    const tiktokViewsList = document.getElementById('tiktok-views');
    tiktokViews.forEach(view => {
        const li = document.createElement('li');
        li.textContent = view;
        tiktokViewsList.appendChild(li);
    });

    const youtubeSubscribersList = document.getElementById('youtube-subscribers');
    youtubeSubscribers.forEach(subscriber => {
        const li = document.createElement('li');
        li.textContent = subscriber;
        youtubeSubscribersList.appendChild(li);
    });

    const youtubeViewsList = document.getElementById('youtube-views');
    youtubeViews.forEach(view => {
        const li = document.createElement('li');
        li.textContent = view;
        youtubeViewsList.appendChild(li);
    });

    const youtubeLikesList = document.getElementById('youtube-likes');
    youtubeLikes.forEach(like => {
        const li = document.createElement('li');
        li.textContent = like;
        youtubeLikesList.appendChild(li);
    });
});

// Toastify for notifications
const toast = {
    success: (message) => {
        const toastElement = document.createElement('div');
        toastElement.textContent = message;
        toastElement.className = 'toast success';
        document.querySelector('.toast-container').appendChild(toastElement);
        setTimeout(() => {
            toastElement.remove();
        }, 3000);
    },
    error: (message) => {
        const toastElement = document.createElement('div');
        toastElement.textContent = message;
        toastElement.className = 'toast error';
        document.querySelector('.toast-container').appendChild(toastElement);
        setTimeout(() => {
            toastElement.remove();
        }, 3000);
    }
};
