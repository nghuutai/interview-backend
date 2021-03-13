export default function(sequelize, DataTypes) {
    const UserTeam = sequelize.define('UserTeam', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        team_id: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    }, {
        tableName: 'user_team',
        underscored: true
    });

    return UserTeam;
}