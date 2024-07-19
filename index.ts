// Copyright 2023, Pulumi Corporation.  All rights reserved.

import { NextJsSite } from "./nextjs";

const site = new NextJsSite("mysite", {
    path: "ratecraig",
});

export const url = site.url;