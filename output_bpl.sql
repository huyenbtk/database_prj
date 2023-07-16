USE [bpl]
GO

INSERT INTO [dbo].[Product]
           ([ProductID]
           ,[Name]
           ,[Price]
           ,[Info]
           ,[Image]
           ,[Category]
           ,[Sold])
     VALUES
           (<ProductID, varchar(5),>
           ,<Name, ntext,>
           ,<Price, decimal(10,0),>
           ,<Info, ntext,>
           ,<Image, text,>
           ,<Category, ntext,>
           ,<Sold, int,>)
GO

