// api/teachers.js

var global = {
    teachers: [
        {
            name: "Amadeusz Guszti",
            hisClass: "9/A",
            favorite: false,
        },
        {
            name: "Amadeusz Armi",
            hisClass: "9/C",
            favorite: true,
        },
    ],
    //favoriteTeacherIdx: null,
}
//export global

export default async function handler(req, res) {
    if (req.method == "GET") console.log("GET /teachers serverless function starts", global)

    res.status(200).json(global.teachers)

}
