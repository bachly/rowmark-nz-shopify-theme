// RowmarkNZ Theme
// PROD theme: 109950206107
// TEST theme: 109953515675

// list themes
theme get --list -p=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 -s=rowmarknz.myshopify.com

// download theme
theme download -p=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 -s=rowmarknz.myshopify.com

// configure themes TEST
theme configure --password=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 --store=rowmarknz.myshopify.com --themeid=109953515675

// configure themes PROD
theme configure --password=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 --store=rowmarknz.myshopify.com --themeid=109950206107

// watch and deploy to TEST
theme watch --password=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 --notify=/.theme.update --themeid=109953515675

// watch and deploy to PROD
theme watch --password=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 --notify=/.theme.update --themeid=109950206107

// deploy to TEST
theme deploy --password=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 --store=rowmarknz.myshopify.com --themeid=109953515675

// deploy to PROD
theme deploy --password=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 --store=rowmarknz.myshopify.com --themeid=109950206107