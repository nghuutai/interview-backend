export default function(sequelize, DataTypes) {
    const Department = sequelize.define('Department', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        management_by: {
            type: DataTypes.UUID,
        }
    }, {
        tableName: 'department',
        underscored: true
    });

    Department.associate = (models) => {
        Department.Teams = Department.hasMany(
            models.Team,
            {
                as: 'team',
                foreignKey: 'department_id',
                onDelete: 'cascade',
            }
        );
    }
    return Department;
}