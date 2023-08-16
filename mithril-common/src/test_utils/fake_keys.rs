//! Pre hex encoded StmTypes for testing.

/// A list of pre json hex encoded [MithrilStm:StmSig](type@mithril_stm::stm::StmSig)
pub const fn single_signature<'a>() -> [&'a str; 4] {
    [
        "7b227369676d61223a5b3133302c3137372c31352c3232392c32342c3235312c3234372c3137312c3139362c32\
        31302c3134332c3131332c38362c3138392c39322c35362c3131322c33332c3139332c3231322c35342c3231342\
        c32382c3231362c3232372c3137332c3130302c3132372c3137382c34302c39382c38372c32392c3138312c3235\
        352c3131312c3135372c3232342c3233352c34362c3130302c3136392c3233322c3138392c3235322c38322c313\
        3392c33365d2c22696e6465786573223a5b302c312c332c342c362c382c392c31302c31312c31322c31342c3138\
        2c32312c32322c32332c32352c32362c32372c33302c33332c33342c33382c34312c34332c35302c35382c35392\
        c36302c36312c36322c36372c36392c37312c37332c37352c37362c37372c38312c38322c38332c38342c39302c\
        39312c39322c39332c39372c39385d2c227369676e65725f696e646578223a327d",
        "7b227369676d61223a5b3136362c3130352c39352c32382c31312c3139372c32352c31372c3132392c3231312c\
        3136312c35322c3231372c3232382c3136362c38342c37312c39342c3133312c3133312c32332c35302c3131342\
        c3138382c32322c3133372c3231342c37372c3234332c3233382c3136332c3130322c34392c36342c32332c3832\
        2c3139312c3235312c3132302c34312c3230352c3131302c3232352c3138342c38352c32342c382c3130325d2c2\
        2696e6465786573223a5b352c382c392c31322c31332c31352c32302c32312c32332c32352c32392c33312c3334\
        2c33362c33392c34302c34332c34342c34352c34382c35352c35372c36312c36362c36382c37312c37322c37332\
        c37342c37382c37392c38302c38322c38332c38382c39312c39322c39342c39352c39362c3130322c3130352c31\
        30362c3130382c3131302c3131322c3131332c3131352c3131372c3131392c3132322c3132332c3132352c31323\
        82c3132392c3133332c3133372c3133392c3134302c3134312c3134322c3134342c3134362c3134372c3134382c\
        3134392c3135312c3135322c3135342c3135392c3136302c3136312c3136322c3136332c3136342c3136362c313\
        6372c3136382c3137302c3137322c3137342c3137372c3137382c3137392c3138302c3138322c3138342c313837\
        2c3138382c3138392c3139312c3139332c3139352c3139372c3230302c3230322c3230352c3230362c3230382c3\
        230395d2c227369676e65725f696e646578223a307d",
        "7b227369676d61223a5b3133312c3133342c3235322c3138372c31352c3135362c352c3130352c31372c323532\
        2c3137372c3231382c3132372c3133342c36312c3235352c3232382c33332c3136382c33312c3131362c3131332\
        c3138302c3232362c3232392c32312c3137302c35392c322c3138332c3232322c38312c3235302c31332c313933\
        2c31332c3234362c3232392c3137302c3130352c3138352c3136342c38382c392c3136302c35322c3130332c323\
        15d2c22696e6465786573223a5b302c312c322c342c352c362c372c382c392c31322c31342c32342c32382c3239\
        2c33312c33332c33352c33362c33382c34302c34312c34322c34332c34372c34392c35302c35312c35322c35342\
        c35352c35362c35372c35382c35392c36302c36312c36322c36342c36362c36372c36382c36392c37312c37322c\
        37342c37362c37372c37382c37392c38302c38312c38322c38332c38342c38362c38392c39302c39312c39332c3\
        9352c39362c39372c39382c3130302c3130312c3130352c3130362c3130382c3130392c3131302c3131312c3131\
        322c3131332c3131382c3131392c3132302c3132312c3132322c3132332c3132342c3132352c3132362c3132372\
        c3132382c3133302c3133322c3133362c3134302c3134322c3134332c3134342c3134352c3134392c3135312c31\
        35342c3135362c3135372c3135382c3135392c3136302c3136312c3136322c3136332c3136342c3136362c31363\
        72c3136382c3136392c3137302c3137312c3137322c3137332c3137342c3137382c3137392c3138302c3138312c\
        3138322c3138332c3138342c3138352c3138362c3138392c3139302c3139312c3139322c3139332c3139352c313\
        9362c3139392c3230312c3230322c3230332c3230342c3230352c3230362c3230385d2c227369676e65725f696e\
        646578223a317d",
        "7b227369676d61223a5b3133302c32382c3134332c31372c38302c31302c3231352c3138382c3230352c313232\
        2c31312c3233392c34362c3234352c32312c3139332c32382c3232312c3133302c34302c3131362c39322c31393\
        62c33352c3235342c34332c3138382c362c38372c3136392c37312c3134352c3130342c3137382c392c3136362c\
        39342c31332c3234372c3139302c3130322c37312c3232362c3230392c312c3230392c3235312c3137305d2c226\
        96e6465786573223a5b302c312c382c31322c31332c31342c31382c31392c32332c32352c32362c32372c32382c\
        33322c33332c33342c33352c33372c33382c33392c34312c34322c34332c34342c34352c34362c34372c34382c3\
        4392c35302c35312c35322c35332c35342c35352c35362c35372c35382c35392c36302c36312c36332c36342c36\
        352c36372c36382c37302c37312c37352c37362c37372c37392c38302c38312c38322c38342c38352c38392c393\
        02c39312c39332c39352c39372c39382c39395d2c227369676e65725f696e646578223a337d"
    ]
}

/// A list of pre json hex encoded [MithrilStm:StmAggrSig](struct@mithril_stm::stm::StmAggrSig)
pub const fn multi_signature<'a>() -> [&'a str; 2] {
    [
        "7b227369676e617475726573223a5b5b7b227369676d61223a5b3137312c3136312c3232352c3139342c32382c\
        39372c3138322c392c39362c3135302c3130342c3233332c332c372c35332c3130392c3139302c3137312c38372\
        c392c39332c36392c3137352c3137342c3132302c332c3139342c39342c3132322c3234342c3138362c35312c31\
        31342c34362c3135332c3233372c3132332c39332c3232332c35362c3235312c312c36372c3230322c34312c313\
        3322c3135342c3130315d2c22696e6465786573223a5b31382c32362c33312c35322c35332c35372c36352c3639\
        2c37302c37332c37392c38372c39342c39362c3131322c3131372c3131382c3132312c3133302c3133312c31343\
        02c3134322c3134382c3135342c3135372c3135392c3137312c3137352c3137372c3138392c3139322c3139352c\
        3230362c3230395d2c227369676e65725f696e646578223a307d2c5b5b3135312c31392c39342c3234352c32333\
        52c3132372c3130302c3131372c3132392c3137342c3133362c3130392c33342c3136332c3134312c3235342c32\
        34332c39332c39352c3132382c3137382c3235312c3231362c3134342c3133342c39302c3232342c3133392c313\
        3392c3134352c3131382c3131342c332c3234352c3230302c3136332c3230302c3137312c3231392c39352c3130\
        302c3230382c34302c38372c3133312c3132312c3131302c3132342c31352c38332c34382c3132302c31392c333\
        92c3132392c3138322c3135352c39382c3136352c3134302c3137332c3132392c3232302c3131382c34392c3230\
        362c3131362c3137342c3136342c36322c39352c3230332c3139312c39362c3131372c32312c39382c32392c383\
        42c32352c3232332c36342c312c3234382c3135392c37312c3136312c3232382c31392c37352c3134342c35332c\
        3136392c3231372c3133382c36375d2c323030303030305d5d2c5b7b227369676d61223a5b3137302c3233382c3\
        234302c3135312c33302c38312c3132322c37372c342c36332c3134352c32312c3231352c38382c3231332c3234\
        342c3133382c36372c33352c37392c3233312c3231332c3136302c39342c3130332c36352c35322c3235302c323\
        1302c35342c3135302c32372c3132302c3139332c3234322c3235342c3130352c3230372c3138332c3230372c32\
        33342c3233342c3136322c3138382c3136382c3230332c3230352c39335d2c22696e6465786573223a5b312c322\
        c332c342c352c362c372c382c31302c31312c31322c31342c31352c31362c31392c32302c32312c32322c32332c\
        32352c32372c32382c32392c33322c33332c33342c33352c33382c33392c34302c34312c34322c34332c34342c3\
        4352c34362c34382c35302c35312c35342c35352c35362c35382c35392c36302c36312c36322c36332c36372c36\
        382c37322c37342c37352c37362c37372c37382c38302c38312c38322c38352c38382c38392c39372c39382c313\
        0312c3130322c3130332c3130342c3130352c3130362c3130372c3131302c3131312c3131332c3131342c313135\
        2c3131362c3131392c3132302c3132322c3132342c3132352c3132362c3132372c3132382c3132392c3133322c3\
        133342c3133362c3133392c3134312c3134332c3134342c3134352c3134362c3134392c3135312c3135322c3135\
        332c3135362c3136302c3136312c3136322c3136342c3136352c3136362c3136372c3136382c3137302c3137322\
        c3137332c3137342c3137362c3137382c3138302c3138312c3138322c3138332c3138342c3138352c3138362c31\
        38382c3139342c3139372c3139382c3139392c3230312c3230322c3230332c3230342c3230372c3230385d2c227\
        369676e65725f696e646578223a317d2c5b5b3137322c32352c32312c3132352c3133312c38302c3234382c3731\
        2c39302c3138302c37312c3137372c3232302c3132332c39342c3231372c3139332c33352c36322c33382c31353\
        72c3135332c3231382c32372c3136342c38372c37342c322c3233352c3233332c3136322c39302c36332c313830\
        2c3137302c3230332c3235332c3132382c37312c362c39312c3231332c35302c39392c3133372c3230382c34392\
        c38382c32352c3139372c3136392c3133312c3130312c3139352c33332c36322c3130352c3234312c31372c3233\
        2c34312c31392c3135352c3138382c3134342c31382c3130342c35362c3136382c31352c3232312c3137322c323\
        0332c3137322c3138382c33362c35302c362c3135362c34372c3135322c38372c3132302c3133302c312c313435\
        2c302c3138342c32312c39362c38322c3233302c3132382c3134302c37342c34335d2c343030303030305d5d5d2\
        c2262617463685f70726f6f66223a7b2276616c756573223a5b5d2c22696e6469636573223a5b302c315d2c2268\
        6173686572223a6e756c6c7d7d",
        "7b227369676e617475726573223a5b5b7b227369676d61223a5b3137392c3132392c31322c3231392c33352c32\
        392c3233352c3139332c3233342c31312c3130352c32332c31332c3234302c3139352c332c3235322c3137392c3\
        235332c36372c3139342c3139372c3233372c36312c3138392c3131362c3231342c3230392c31332c3135362c32\
        34362c33352c3138302c3137312c3230352c3230332c3138312c3138362c37302c3233312c3233312c3134332c3\
        4372c39382c3234372c3131382c3230382c36365d2c22696e6465786573223a5b372c31352c31372c31382c3235\
        2c33362c34312c34392c35322c35342c36302c36362c37382c38322c38392c39312c3130392c3131322c3131372\
        c3132302c3132322c3132332c3133322c3134352c3134382c3136372c3137342c3137382c3137392c3138382c31\
        39342c3230302c3230332c3230365d2c227369676e65725f696e646578223a307d2c5b5b3138342c3233312c353\
        02c34352c33372c3231342c3139362c3232342c3137392c31342c3134362c38392c3232362c3136322c342c3232\
        342c392c3231322c32372c39342c3137302c3133302c39392c37392c35392c3134332c3235312c3137302c31373\
        92c39342c35372c3132382c3139342c3135372c3231342c37332c3234342c3133312c38312c3131382c3232382c\
        3133322c3130352c3230302c3230302c3132322c35302c3130352c31332c33352c3131302c3138392c3130382c3\
        131322c34352c3232382c32372c3231372c36332c3230312c3130302c33362c3130382c39312c35332c3133332c\
        3132392c38342c33382c3132352c3232332c39332c3136392c31302c3230332c3235302c3232372c3133392c313\
        1312c3133362c3232392c31372c37372c38352c3138352c39302c32382c3133362c3133342c3231362c31332c31\
        35322c3137392c36362c3138312c3234385d2c323030303030305d5d2c5b7b227369676d61223a5b3132392c323\
        2332c32362c3130312c3136342c3233312c33352c3235312c342c3134352c31392c3233322c3135362c3232372c\
        3230362c33352c3235322c35312c31362c3132382c38342c3138332c382c352c3231362c342c3230392c3134342\
        c3233342c38312c3131382c332c3134312c36302c38352c3135332c3235322c3131372c31392c3135392c313836\
        2c3139352c3137322c33392c3132302c3230322c33342c31385d2c22696e6465786573223a5b312c322c332c342\
        c352c362c31302c31312c31342c31392c32302c32322c32332c32342c32362c32382c32392c33312c33322c3333\
        2c33342c33352c33382c33392c34302c34322c34332c34342c34352c34362c34382c35302c35332c35362c35372\
        c35382c35392c36322c36342c36352c36382c36392c37302c37312c37322c37342c37352c37392c38312c38332c\
        38352c38362c38372c38382c39302c39322c39352c39362c39392c3130302c3130342c3130352c3130362c31303\
        72c3131302c3131312c3131332c3131342c3131352c3131362c3131382c3131392c3132312c3132342c3132352c\
        3132362c3132372c3132382c3132392c3133302c3133332c3133342c3133352c3133362c3133372c3133382c313\
        3392c3134302c3134322c3134332c3134362c3134392c3135322c3135342c3135352c3135362c3135372c313538\
        2c3135392c3136302c3136312c3136322c3136332c3136342c3136352c3136362c3136392c3137302c3137312c3\
        137322c3137332c3137352c3137362c3138302c3138312c3138322c3138342c3138352c3138392c3139302c3139\
        312c3139322c3139332c3139352c3139362c3139372c3139382c3139392c3230312c3230322c3230342c3230352\
        c3230382c3230395d2c227369676e65725f696e646578223a317d2c5b5b3138322c3139392c3131372c35302c35\
        362c322c3138372c33352c3131342c37342c3232312c31342c3134312c36382c3235312c37362c36362c3131312\
        c3233312c3136362c3132362c3134342c33312c3133342c3235322c3139382c3233302c37302c31332c34382c32\
        30342c3130332c3134312c3133362c35312c3134302c3137382c3133342c3138312c3131362c37342c33342c363\
        92c38372c31392c3133372c3136342c35342c32302c3132382c31302c3139392c3137382c392c37312c3136362c\
        3135362c31382c3130342c35312c3138382c3233372c37372c3132392c32392c31382c3234342c3136302c34382\
        c3132372c3138312c3131302c39362c3130302c31372c32302c32322c3230372c31332c3233332c3234352c3232\
        392c32342c3136332c35302c36372c31372c36342c3231392c3234302c34392c3234302c3235332c322c3235312\
        c3134385d2c343030303030305d5d5d2c2262617463685f70726f6f66223a7b2276616c756573223a5b5d2c2269\
        6e6469636573223a5b302c315d2c22686173686572223a6e756c6c7d7d",
    ]
}

/// A list of pre json hex encoded [Ed25519:Signature](https://docs.rs/ed25519-dalek/latest/ed25519_dalek/struct.Signature.html).
pub const fn genesis_signature<'a>() -> [&'a str; 2] {
    [
        "ebc0652ffe864970a2ba538eacf7d088e9840e3db883c96d13eb6c5b4c74cfc6e84932e4640ca9e3b5e3de2dd6\
        15247a88c011405cc7508736abcf99cae2b10b",
        "cee89d557736c43990d4004a698036018ecadfd1dd219e8d58996c778e489500e0f113ec8bc1b7b3b4f90424e7\
        7f45430c073eedfc76b5d40b34ddf71b09d308",
    ]
}

/// A list of pre json hex encoded [MithrilStm:StmVerificationKeyPoP](type@mithril_stm::stm::StmVerificationKeyPoP)
pub const fn signer_verification_key<'a>() -> [&'a str; 4] {
    [
        "7b22766b223a5b3134352c32332c3135382c31322c3138332c3230392c33322c3134302c33372c3132342c3136\
        362c3231352c3136302c3231352c3235302c3133342c3135342c3235302c3234312c3230362c3139342c3232322\
        c382c35392c33332c392c35382c322c3235312c31302c33322c3135352c3232372c3134332c3232362c35372c31\
        35312c37342c3139392c3131372c37352c3136382c3134302c34362c3233392c3134352c37322c31362c32312c3\
        138312c3139332c3134362c38362c3231332c3230342c3139332c3232332c32352c3135372c33342c33332c3232\
        372c35312c3132362c3132362c3135362c36342c3232302c3139392c3231332c31362c34352c3131302c3234332\
        c33352c3134382c37312c3231382c3132342c3132332c31362c3132312c3135322c31382c32362c3231322c3231\
        342c3230312c3139302c3137342c3131352c39372c3234392c3235342c3131362c3234335d2c22706f70223a5b3\
        138332c3134352c3133392c3234322c3132302c3136302c35362c3131382c3234322c3230342c39312c38392c32\
        312c3138342c382c34372c3231332c3130352c36332c3135302c32312c3231372c352c382c3231392c3138382c3\
        131342c3230352c3136362c31362c3234302c3234302c3231342c31362c3230342c3231382c3139332c3138312c\
        32342c35362c34352c39392c3234342c38312c32352c35322c3232342c36372c3136382c3136392c3130392c313\
        2322c38372c34392c3137302c3138312c3135312c31352c3235322c3139352c3231312c3233342c3139352c3439\
        2c39312c31392c35312c3234312c33332c35382c3134302c3235322c3234322c362c342c34302c32312c3136372\
        c3234392c3235312c33362c38372c36302c39362c36392c3135322c3231302c39382c3136352c352c362c34312c\
        39362c3233352c37352c3138335d7d",
        "7b22766b223a5b3134332c3136312c3235352c34382c37382c35372c3230342c3232302c32352c3232312c3136\
        342c3235322c3234382c31342c35362c3132362c3138362c3133352c3232382c3138382c3134352c3138312c353\
        22c3230302c39372c39392c3231332c34362c302c3139392c3139332c38392c3138372c38382c32392c3133352c\
        3137332c3234342c38362c33362c38332c35342c36372c3136342c362c3133372c39342c37322c362c3130352c3\
        132382c3132382c39332c34382c3137362c31312c342c3234362c3133382c34382c3138302c3133332c39302c31\
        34322c3139322c32342c3139332c3131312c3134322c33312c37362c3131312c3131302c3233342c3135332c393\
        02c3230382c3139322c33312c3132342c39352c3130322c34392c3135382c39392c35322c3232302c3136352c39\
        342c3235312c36382c36392c3132312c31362c3232342c3139345d2c22706f70223a5b3136382c35302c3233332\
        c3139332c31352c3133362c36352c37322c3132332c3134382c3132392c3137362c33382c3139382c3230392c34\
        372c32382c3230342c3137362c3134342c35372c3235312c34322c32382c36362c37362c38392c39372c3135382\
        c36332c35342c3139382c3139342c3137362c3133352c3232312c31342c3138352c3139372c3232352c3230322c\
        39382c3234332c37342c3233332c3232352c3134332c3135312c3134372c3137372c3137302c3131372c36362c3\
        136352c36362c36322c33332c3231362c3233322c37352c36382c3131342c3139352c32322c3130302c36352c34\
        342c3139382c342c3136362c3130322c3233332c3235332c3234302c35392c3137352c36302c3131372c3134322\
        c3131342c3134302c3132322c31372c38372c3131302c3138372c312c31372c31302c3139352c3135342c31332c\
        3234392c38362c35342c3232365d7d",
        "7b22766b223a5b3134352c35362c3137352c33322c3132322c3138372c3231342c3232362c3235312c3134382c\
        38382c392c312c3130332c3135392c3134362c38302c3136362c3130372c3234332c3235312c3233362c34312c3\
        2382c3131312c3132382c3230372c3136342c3133322c3134372c3232382c38332c3234362c3232382c3137302c\
        36382c38392c37382c36302c32382c3132332c3133302c38382c3233342c33382c39372c34322c36352c312c313\
        0302c35332c31382c37382c3133312c382c36312c3132322c3133312c3233382c38342c3233332c3232332c3135\
        342c3131382c3131382c37332c32382c32372c3130312c37382c38302c3233332c3132332c3230362c3232302c3\
        137342c3133342c3230352c37312c3131302c3131322c3138302c39372c39382c302c3131332c36392c3134352c\
        3233312c3136382c34332c3137332c3137322c35362c3130342c3230385d2c22706f70223a5b3133372c3231342\
        c37352c37352c3134342c3136312c3133372c37392c39342c3134302c3138312c34372c33312c38312c3231332c\
        33312c3137312c3231362c32342c3137342c37382c3234382c3133302c37352c3235352c31312c3134352c31323\
        42c36312c38302c3139302c32372c3231362c3130352c3130362c3234382c39312c3134332c3230342c3130322c\
        3230332c3136322c37362c3130372c31352c35322c36312c38322c3134362c3133302c3132342c37342c382c333\
        42c3136342c3138372c3230332c38322c36342c3130382c3139312c3138352c3138382c37372c3132322c352c32\
        34362c3235352c3130322c3131392c3234372c3139392c3131372c36372c3234312c3134332c32392c3136382c3\
        6372c39342c3135312c37382c3132392c3133312c33302c3130312c3137332c31302c36392c36382c3137352c39\
        382c33372c3233392c3139342c32395d7d",
        "7b22766b223a5b3138332c37392c3133302c3132302c38342c3135322c33322c3134342c3138302c3130342c31\
        39322c3134302c3133392c38352c32332c302c3137312c3132312c3136342c38382c31382c3136392c3233332c3\
        137382c39322c342c392c3134302c3230332c37352c39362c3232352c31302c31382c33302c38322c3132312c32\
        30302c36382c33362c34352c3132302c3231322c35332c3232322c3135332c31322c3138382c31312c3131332c3\
        231352c31382c3132352c36302c3231302c3130302c35322c3138392c34372c31312c3135322c33382c35332c38\
        362c32342c3231322c34322c3131302c35352c3139372c36322c3137362c33392c35322c39372c3137322c31322\
        c322c3234302c31342c322c3131332c3138362c3131382c39372c37312c34342c3233342c3133392c3234302c36\
        2c3232392c3136372c3231312c38302c3136305d2c22706f70223a5b3135312c3138312c3231332c3137382c323\
        5342c3137312c3235352c3234332c3131342c34352c34342c3137352c3234332c3137302c3135372c3133382c31\
        39382c38362c31362c36322c31392c3132342c3131392c37332c3230302c35332c3231372c3230322c382c31393\
        32c3134352c3132312c3231362c34362c3134392c3233382c3232332c3233342c35382c32362c322c3131342c32\
        302c3131372c38332c3234382c3138332c36302c3134372c38322c3230352c3139332c3136322c34352c3136312\
        c3231302c31312c342c3230302c37352c382c3137382c3135342c3235332c37312c3234302c3132362c38332c32\
        322c33342c3231372c3138362c3232312c3131302c3138362c3133372c352c3139372c3231382c35352c3132352\
        c3137372c3136302c36332c32342c39382c3134322c3232362c3133322c3231312c3230392c3136372c32372c31\
        37322c37362c3137375d7d",
    ]
}

/// A list of pre json hex encoded [KES:Sum6KesSig](https://github.com/input-output-hk/kes/blob/master/src/kes.rs)
pub const fn signer_verification_key_signature<'a>() -> [&'a str; 1] {
    [
        "7b227369676d61223a7b227369676d61223a7b227369676d61223a7b227369676d61223a7b227369676d61223a\
        7b227369676d61223a5b33322c3235332c3134372c3132382c39302c3137372c31322c3231302c3232312c37332\
        c31332c3234332c31302c36342c39322c3139322c3131342c3231302c3231372c3133312c3131322c3137322c32\
        31362c3138372c38382c3138362c32372c31342c3134302c3230362c38312c3234332c3132342c3131342c32343\
        62c3130342c35362c3131342c372c3131342c35372c3232392c3135362c32332c39342c32382c3137372c36302c\
        3131302c34332c3136362c392c3139392c3233302c3133342c37302c3233322c3131362c3130302c36382c39342\
        c3135332c3136342c31345d2c226c68735f706b223a5b3136332c3234362c39382c3232362c31302c36302c3131\
        322c3234312c3136372c36322c3230302c3234382c39392c3133382c3136322c3137322c3137352c31332c31383\
        92c392c302c3234392c34322c3232392c3231312c3230362c3235302c3136372c33382c36332c3138392c313433\
        5d2c227268735f706b223a5b3137322c3138392c3138352c3233302c3234382c39342c3235312c3138312c31373\
        92c38362c38342c32332c3137382c3230352c3232362c382c3233312c3230372c3231302c38332c36382c323134\
        2c3231362c37342c3135362c3130322c32382c3233302c382c35322c3130312c3234355d7d2c226c68735f706b2\
        23a5b3134302c3230372c39382c3133362c3134312c3233312c3231352c3230342c35322c3135352c38392c3232\
        332c34382c3134392c3138352c3135352c3131342c3235352c39332c3137352c3234332c37302c3137362c31343\
        32c32342c3132352c32392c3231392c3135302c33362c3232352c33375d2c227268735f706b223a5b3137312c32\
        32392c3139332c3130352c3233342c31382c3232392c38312c3235352c3139322c3133302c32352c33322c31383\
        42c312c33392c39332c3138372c382c3233332c36392c37342c35362c3130312c37302c3231332c3232342c3332\
        2c31382c3130322c3235332c35355d7d2c226c68735f706b223a5b34322c302c31382c36382c3135332c3234312\
        c3231342c3133352c3139342c34332c3231322c35382c36322c332c3136302c3133332c34342c37342c3131312c\
        37382c3136322c3133322c35372c32362c3138392c36372c3132372c3232352c37352c3137312c31342c3131345\
        d2c227268735f706b223a5b3133372c3135302c39302c3139362c3232322c3234312c3137392c3133372c313036\
        2c33362c3130322c37322c35372c37312c3130392c3235302c392c33362c3134362c3234372c37342c3231362c3\
        1322c342c35322c33372c3233342c37302c3233342c37302c36362c34315d7d2c226c68735f706b223a5b313231\
        2c3134352c3233352c3230392c3135322c39302c3135372c3231392c35312c34302c3136372c322c3137372c313\
        8372c39372c3135332c3138392c3130392c3234392c38392c3231372c3135302c3139322c3131302c3232322c31\
        38332c3134362c39392c3134352c35392c3132352c3132305d2c227268735f706b223a5b32362c38352c3137332\
        c3235302c34382c36322c33382c3231392c39312c3138392c3136382c35322c3137392c34342c39332c39362c31\
        362c3136392c38372c31302c3137302c312c3138392c322c3235352c3131312c3230342c3233372c3138312c313\
        7342c31362c3231385d7d2c226c68735f706b223a5b372c37382c3233342c34362c32372c3234322c332c323431\
        2c3231342c3131322c372c34302c3131372c39372c39332c3234322c3130342c3137302c39352c3138372c37382\
        c3134312c3233382c35392c3231302c352c3133342c3234392c3231372c31302c3132312c33345d2c227268735f\
        706b223a5b3134312c3130332c3232332c3233332c3230322c34302c3231352c3135362c3131342c36342c32313\
        32c35392c3233332c33362c3234372c3132342c3130392c3138312c3230302c3136342c3232302c3230352c3239\
        2c3133332c3132302c3232342c3132312c3132362c36362c3235322c37312c3233325d7d2c226c68735f706b223\
        a5b3134352c3139352c3234312c35332c3139392c3133362c33322c3235342c3131362c3132302c3137352c3232\
        332c31382c37352c3134362c35312c3131362c3235332c3137342c3132312c3235342c3134302c3136392c33302\
        c3135312c33332c3134392c3131342c3130322c3132332c3139302c33325d2c227268735f706b223a5b32362c32\
        33332c3137382c3138372c3234342c33382c3138372c3132332c3133382c33312c34352c39382c37302c38322c3\
        232392c39302c3137372c36352c3133332c3135372c39372c3233302c35302c37382c3134362c37302c3230322c\
        3130312c35362c32302c3234372c3231375d7d",
    ]
}

/// A list of pre json hex encoded [OpCert][crate::crypto_helper::OpCert]
pub const fn operational_certificate<'a>() -> [&'a str; 2] {
    [
        "5b5b5b3230332c3130392c34302c32382c3235312c39342c35322c32342c3231322c3131362c3134392c38302c\
        3138332c3136322c312c36322c352c3133332c35372c3230342c31352c3137322c3134372c38362c3132352c353\
        92c31322c3235332c3130312c3138342c32332c31355d2c322c3132382c5b3133382c3131302c3139322c35302c\
        38362c332c3136382c33342c3137322c31392c39312c3133392c3139302c3134302c31382c3137372c33312c343\
        62c3132322c3130362c3233342c3137372c3130382c3232352c3230372c342c302c35392c3233372c3133352c31\
        30342c39382c3133332c3133312c32392c3231322c3137312c3139342c3234342c3139312c3137392c3131392c3\
        4322c37352c3135302c36312c3232362c3132312c35342c3232332c3139332c3133382c3139302c32372c313832\
        2c3135322c35362c32312c3136302c3230372c33352c3233372c3130322c31325d5d2c5b3230372c31322c31363\
        82c3139302c34362c3131362c3139362c3133332c3139362c3233312c3132342c3235302c3134372c33372c3137\
        352c3231312c3234372c3139382c3134302c3133392c3234362c3130342c3132342c3232372c34392c352c32353\
        32c3232382c3130372c39332c3133362c3134345d5d",
        "5b5b5b3138362c39352c3232362c3137342c3132352c3235302c31302c3232322c3130322c3234302c36352c32\
        35352c34372c3133382c38392c3131302c31342c3131302c32322c3138322c33322c3136362c3231312c392c323\
        02c32302c35352c35382c3232392c3132302c3235302c37315d2c312c3136352c5b3130352c35342c3234352c35\
        362c3231352c3130362c3133392c3231322c3137342c3232332c39302c3234392c3138372c34372c3134382c353\
        02c34302c31352c3131372c3231372c3134392c3132362c3231382c3232352c3133362c36352c3231392c313630\
        2c3134382c39332c3232382c3235312c31392c3231332c3136382c332c3233362c38392c3132302c3135392c313\
        9382c38302c3234342c3138302c33332c3131392c3132382c3230312c3138362c3132302c32312c3130322c3632\
        2c3232392c32382c3135352c37362c31392c3235322c3232312c3234372c3137342c3135392c365d5d2c5b32343\
        12c32372c31332c34342c3131342c37382c3138392c3234392c3135302c3135302c35332c3134342c3233362c31\
        35312c38382c3134302c3132382c3136322c36302c3232382c38382c3131312c392c3134342c3233322c38332c3\
        9342c3231302c3135362c3136382c33352c3234325d5d",
    ]
}

#[cfg(test)]
mod test {
    use super::*;
    use kes_summed_ed25519::kes::Sum6KesSig;
    use mithril_stm::stm::{StmAggrSig, StmSig, StmVerificationKeyPoP};
    use serde::{de::DeserializeOwned, Serialize};
    use std::any::type_name;

    use crate::crypto_helper::{
        key_decode_hex, OpCert, ProtocolGenesisSignature, ProtocolKey, ProtocolKeyCodec, D,
    };

    fn assert_decode_all<T: Fn(&str) -> Result<(), String>>(encoded_types: &[&str], decode_fun: T) {
        let errors: Vec<String> = encoded_types
            .iter()
            .filter_map(|encoded_type| match decode_fun(encoded_type) {
                Ok(..) => None,
                Err(error_src) => {
                    let error = format!(
                        "> The encoded key does not match anymore the structure of the type: `{}`\
                        \n  * error: {error_src}\
                        \n  * encoded_string: {encoded_type}",
                        type_name::<T>()
                    );

                    Some(error)
                }
            })
            .collect();

        assert!(
            errors.is_empty(),
            "At least one of the encoded values could not be decoded:\n{}",
            errors.join("\n")
        );
    }

    fn assert_can_deserialize_using_key_decode_hex<T: Serialize + DeserializeOwned>(
        encoded_types: &[&str],
    ) {
        assert_decode_all(encoded_types, |encoded_type| {
            key_decode_hex::<T>(encoded_type).map(|_| ())
        })
    }

    fn assert_can_convert_to_protocol_key<T: ProtocolKeyCodec<T> + Serialize + DeserializeOwned>(
        encoded_types: &[&str],
    ) {
        assert_decode_all(
            encoded_types,
            |encoded_type| match ProtocolKey::<T>::try_from(encoded_type) {
                Ok(_) => Ok(()),
                Err(error) => Err(format!("{error:?}")),
            },
        )
    }

    #[test]
    fn assert_encoded_single_signatures_are_still_matching_concrete_type() {
        assert_can_deserialize_using_key_decode_hex::<StmSig>(&single_signature());

        assert_can_convert_to_protocol_key::<StmSig>(&single_signature());
    }

    #[test]
    fn assert_encoded_multi_signatures_are_still_matching_concrete_type() {
        assert_can_deserialize_using_key_decode_hex::<StmAggrSig<D>>(&multi_signature());

        assert_can_convert_to_protocol_key::<StmAggrSig<D>>(&multi_signature());
    }

    #[test]
    fn assert_encoded_genesis_signatures_are_still_matching_concrete_type() {
        assert_decode_all(&genesis_signature(), |encoded_sig| {
            ProtocolGenesisSignature::from_bytes_hex(encoded_sig).map_err(|e| e.to_string())?;
            Ok(())
        });

        assert_can_convert_to_protocol_key::<ed25519_dalek::Signature>(&genesis_signature());
    }

    #[test]
    fn assert_encoded_signer_verification_key_are_still_matching_concrete_type() {
        assert_can_deserialize_using_key_decode_hex::<StmVerificationKeyPoP>(
            &signer_verification_key(),
        );

        assert_can_convert_to_protocol_key::<StmVerificationKeyPoP>(&signer_verification_key());
    }

    #[test]
    fn assert_encoded_signer_verification_key_signature_are_still_matching_concrete_type() {
        assert_can_deserialize_using_key_decode_hex::<Sum6KesSig>(
            &signer_verification_key_signature(),
        );
    }

    #[test]
    fn assert_encoded_operational_certificate_are_still_matching_concrete_type() {
        assert_can_deserialize_using_key_decode_hex::<OpCert>(&operational_certificate());
    }
}
