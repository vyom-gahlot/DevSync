import dev_sync_favicon from './dev_sync_favicon.png';
import dev_sync_logo from './dev_sync_logo.svg';
import code_feature from './code_feature.svg'
import cursor_feature from './cursor_feature.svg'
import chat_feature from './chat_feature.svg'
import language_feature from './language_feature.svg'
import sync_feature from './sync_feature.svg'


export const assets = {
    dev_sync_logo,
    dev_sync_favicon,
    code_feature,
    cursor_feature,
    chat_feature,
    language_feature,
    sync_feature
}

export const features =[
    {
        "id": 1,
        "title": "Real-time Editor",
        "subtitle": "Code updates instantly for everyone in the room",
        "image":  code_feature
    },

    {
        "id": 2,
        "title": "Multi-user Cursors",
        "subtitle": "See exactly where others are typing in real time",
        "image": cursor_feature
    },

    {
        "id": 3,
        "title": "Built-in Chat",
        "subtitle": "Communicate without leaving the workspace",
        "image": chat_feature
    },

    {
        "id": 4,
        "title": "Language Switching",
        "subtitle": "Support for multiple programming languages",
        "image":  language_feature
    },

    {
        "id": 5,
        "title": "Instant Sync",
        "subtitle": "Low latency collaboration that actually feels real-time",
        "image": sync_feature
    }
]