const Player = require('../model/players')

const resolvers = {
    Query: {
        getPlayers: async (parent, args) => {
            const players = await Player.find({})
            
            return players
        },
        getPlayer: async (parent, args) => {
            const player = await Player.findById(args.id)
            return player
        }
    },
    Mutation: {
        addPlayer: async (parent, args) => {
            const player = new Player({
                playername: args.playername,
                position: args.position,
                country: args.country

            })
            const players = await player.save()
            return players
        },
        updatePlayer: async (parent, args) => {
            const player = await Player.findById(args.id)

            if (!player) {
                console.log("player is not found")
            }

            const playertoupdate = await Player.findOneAndUpdate({
                _id: args.id
            },
                {
                    $set: {
                        playername: args.playername,
                        position: args.position,
                        country: args.country

                    }
                }, {
                new: true
            })
            return playertoupdate
        },
        deletePlayer: async (parent, args) => {
            const player = await Player.findById(args.id)

            if (!player) {
                console.log('player not found')
            }

            const playertodelete = await Player.findOneAndUpdate({ _id: args.id },{$set :{isDeleted : true}},{new :true})
            return playertodelete
        }
    }
    
}

module.exports = resolvers