export default function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        role: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        }
    }, {
        tableName: 'user',
        // underscored: true
    });
    
    User.associate = (models) => {
        User.belongsToMany(models.Team, {
          through: 'UserTeam',
          as: 'teams',
          foreignKey: 'user_id',
        });
    };

    return User;
};