export default function(sequelize, DataTypes) {
    const Team = sequelize.define('Team', {
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
        department_id: {
            type: DataTypes.UUID,
        }
    }, {
        tableName: 'team',
        underscored: true
    });

    Team.associate = (models) => {
        Team.belongsToMany(models.User, {
          through: 'UserTeam',
          as: 'users',
          foreignKey: 'team_id',
        });
    };
    return Team;
}