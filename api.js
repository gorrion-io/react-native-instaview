export async function fetchPhotos() {
    const response = await fetch('https://picsum.photos/list')
    return await response.json()
}