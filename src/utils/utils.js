const utils = {
    string: {
        capitalizeFirstLetter: (string) => {
            if (!string)
                return ""

            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        truncateText: (text, length) => {
            if (text.length > length)
                return text.substring(0, length) + '...'

            return text
        }
    },
    createGuid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
            return v.toString(16);
        })
    },
    convertCurrency: (amount, locale, currencyCode) => {
        const formatCurrency = new Intl.NumberFormat(locale || 'en-US', {
            style: 'currency',
            currency: currencyCode || 'USD',
        });
        return formatCurrency.format(amount);
    },
    downloadFile: (blob, blobType, fileName) => {
        const href = URL.createObjectURL(
            new Blob([blob], { type: blobType })
        );
        const anchorElement = document.createElement('a');
        anchorElement.href = href;
        anchorElement.download = fileName;
        document.body.appendChild(anchorElement);
        anchorElement.click();

        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
    },
    images: {
        convertUrl: (url) => {
            if (!url) return url

            if (url.startsWith('http')) return url

            return `${process.env.REACT_APP_SERVER_ENDPOINT}/${url}`
        },
        getImageUrl: (image) => {
            if (!image) return '/assets/images/no-image-icon.svg'

            if (image.path.startsWith('http')) return image.path

            return `${process.env.REACT_APP_SERVER_ENDPOINT}/${image.path}`
        }
    },
    date : {
        formatToShortDate: (date) =>{
            const localData = new Date(date)
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            return `${ localData.getDate()} ${months[localData.getMonth()]}, ${localData.getFullYear().toString().substr(2, 2)}`
        },
        formatToFullDate: (date) =>{
            const localData = new Date(date)
            const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
            ];
            return `${months[localData.getMonth()]} ${ localData.getDate()}, ${localData.getFullYear()}`
        }
    }
}
export default utils