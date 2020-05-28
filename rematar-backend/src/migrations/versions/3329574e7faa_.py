"""empty message

Revision ID: 3329574e7faa
Revises: 
Create Date: 2020-05-27 16:38:58.308042

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3329574e7faa'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('permission',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('role',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('role_name', sa.String(length=25), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('account',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(length=255), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.ForeignKeyConstraint(['role_id'], ['role.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=255), nullable=True),
    sa.Column('first', sa.String(length=255), nullable=True),
    sa.Column('lastname', sa.String(length=255), nullable=True),
    sa.Column('sex', sa.String(length=255), nullable=True),
    sa.Column('dni_type', sa.String(length=25), nullable=True),
    sa.Column('dni', sa.String(length=25), nullable=True),
    sa.Column('civil_status', sa.String(length=25), nullable=True),
    sa.Column('province', sa.String(length=255), nullable=True),
    sa.Column('city', sa.String(length=255), nullable=True),
    sa.Column('address', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('dni'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('account')
    op.drop_table('role')
    op.drop_table('permission')
    # ### end Alembic commands ###
