import { DataTypes } from "sequelize";
import db from "../database/db.js";

const BlogModel = db.define('blogs', {
    titulo: {type: DataTypes.STRING},
    contenido: {type: DataTypes.STRING},
})

export default BlogModel;