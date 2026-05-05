export const allCourses = async () => {
    const res = await fetch('https://category-a8-orange.vercel.app/data.json')
    const data = await res.json()
    return data
}