BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[food_types] (
    [food_type_id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(50) NOT NULL,
    [description] TEXT,
    CONSTRAINT [food_types_pkey] PRIMARY KEY CLUSTERED ([food_type_id]),
    CONSTRAINT [name] UNIQUE NONCLUSTERED ([name])
);

-- CreateTable
CREATE TABLE [dbo].[goals] (
    [goal_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [goal_type] VARCHAR(50) NOT NULL,
    [target_value] INT NOT NULL,
    [start_date] DATE NOT NULL,
    [end_date] DATE NOT NULL,
    CONSTRAINT [goals_pkey] PRIMARY KEY CLUSTERED ([goal_id])
);

-- CreateTable
CREATE TABLE [dbo].[meals] (
    [meal_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [meal_date] DATE NOT NULL,
    [meal_time] DATETIME2 NOT NULL,
    [food_type] VARCHAR(50) NOT NULL,
    [calories] INT NOT NULL,
    [notes] TEXT,
    [logged_at] DATETIME2 CONSTRAINT [meals_logged_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [meals_pkey] PRIMARY KEY CLUSTERED ([meal_id])
);

-- CreateTable
CREATE TABLE [dbo].[preset_workouts] (
    [preset_id] INT NOT NULL IDENTITY(1,1),
    [name] VARCHAR(50) NOT NULL,
    [type] VARCHAR(50) NOT NULL,
    [duration] INT NOT NULL,
    [intensity] VARCHAR(50),
    [description] TEXT,
    CONSTRAINT [preset_workouts_pkey] PRIMARY KEY CLUSTERED ([preset_id])
);

-- CreateTable
CREATE TABLE [dbo].[progress] (
    [progress_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [goal_id] INT,
    [progress_date] DATE NOT NULL,
    [progress_value] INT NOT NULL,
    [logged_at] DATETIME2 CONSTRAINT [progress_logged_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [progress_pkey] PRIMARY KEY CLUSTERED ([progress_id])
);

-- CreateTable
CREATE TABLE [dbo].[sleep_logs] (
    [sleep_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [sleep_date] DATE NOT NULL,
    [sleep_duration] INT NOT NULL,
    [notes] TEXT,
    [logged_at] DATETIME2 CONSTRAINT [sleep_logs_logged_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [sleep_logs_pkey] PRIMARY KEY CLUSTERED ([sleep_id])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [user_id] INT NOT NULL IDENTITY(1,1),
    [username] VARCHAR(50) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [email] VARCHAR(100) NOT NULL,
    [created_at] DATETIME2 CONSTRAINT [users_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [is_admin] BIT CONSTRAINT [users_is_admin_df] DEFAULT 0,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([user_id]),
    CONSTRAINT [username] UNIQUE NONCLUSTERED ([username]),
    CONSTRAINT [email] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[water_intake] (
    [intake_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [intake_date] DATE NOT NULL,
    [intake_amount] INT NOT NULL,
    [logged_at] DATETIME2 CONSTRAINT [water_intake_logged_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [water_intake_pkey] PRIMARY KEY CLUSTERED ([intake_id])
);

-- CreateTable
CREATE TABLE [dbo].[workouts] (
    [workout_id] INT NOT NULL IDENTITY(1,1),
    [user_id] INT,
    [type] VARCHAR(50) NOT NULL,
    [duration] INT NOT NULL,
    [intensity] VARCHAR(50),
    [notes] TEXT,
    [logged_at] DATETIME2 CONSTRAINT [workouts_logged_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [workouts_pkey] PRIMARY KEY CLUSTERED ([workout_id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[goals]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[meals]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [goal_id] ON [dbo].[progress]([goal_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[progress]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[sleep_logs]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[water_intake]([user_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [user_id] ON [dbo].[workouts]([user_id]);

-- AddForeignKey
ALTER TABLE [dbo].[goals] ADD CONSTRAINT [goals_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[meals] ADD CONSTRAINT [meals_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[progress] ADD CONSTRAINT [progress_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[progress] ADD CONSTRAINT [progress_ibfk_2] FOREIGN KEY ([goal_id]) REFERENCES [dbo].[goals]([goal_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[sleep_logs] ADD CONSTRAINT [sleep_logs_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[water_intake] ADD CONSTRAINT [water_intake_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[workouts] ADD CONSTRAINT [workouts_ibfk_1] FOREIGN KEY ([user_id]) REFERENCES [dbo].[users]([user_id]) ON DELETE CASCADE ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
