export function formatDate(dateStr: string): string {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return `${year}年${month}月${day}日`;
}